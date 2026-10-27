import { FIRST_CHAPTER_ID, getChapter } from './registry.js';

export const PROGRESS_SCHEMA_VERSION = 2;
export const STORY_PHASES = Object.freeze(['story', 'interlude', 'awaitingNext']);

export function matchesCondition(condition, variables) {
  if (!condition) return true;
  if (condition.all) return condition.all.every((part) => matchesCondition(part, variables));
  if (condition.any) return condition.any.some((part) => matchesCondition(part, variables));
  if (condition.not) return !matchesCondition(condition.not, variables);
  return Object.hasOwn(variables, condition.var) && variables[condition.var] === condition.equals;
}

function nextSceneId(scene, variables) {
  if (typeof scene.next === 'string') return scene.next;
  if (scene.next?.routes) {
    return scene.next.routes.find((route) => matchesCondition(route.when, variables))?.to ?? scene.next.default;
  }
  return null;
}

function normalizePosition(progress) {
  if (progress.phase !== 'story') return progress;
  const chapter = getChapter(progress.chapterId);
  if (!chapter) throw new Error('Capítulo não encontrado.');

  let current = progress;
  for (let steps = 0; steps < 200; steps += 1) {
    const scene = chapter.scenes[current.sceneId];
    if (!scene) throw new Error('Cena não encontrada.');
    const entry = scene.entries[current.entryIndex];

    if (!entry) {
      const next = nextSceneId(scene, current.variables);
      if (next === 'chapterEnd') return { ...current, phase: 'interlude', entryIndex: scene.entries.length - 1 };
      if (!next || !chapter.scenes[next]) throw new Error('Transição de cena inválida.');
      current = { ...current, sceneId: next, entryIndex: 0 };
      continue;
    }
    if (!matchesCondition(entry.when, current.variables)) {
      current = { ...current, entryIndex: current.entryIndex + 1 };
      continue;
    }
    return current;
  }
  throw new Error('O roteiro contém uma sequência de transições sem diálogo.');
}

export function createInitialProgress(chapterId = FIRST_CHAPTER_ID) {
  const chapter = getChapter(chapterId);
  if (!chapter) throw new Error('Capítulo não encontrado.');
  return normalizePosition({
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    contentRevision: chapter.revision,
    chapterId,
    sceneId: chapter.firstSceneId,
    entryIndex: 0,
    phase: 'story',
    variables: { ...chapter.initialVariables },
    choices: [],
    updatedAt: Date.now(),
  });
}

export function getCurrentScene(progress) {
  return getChapter(progress.chapterId)?.scenes[progress.sceneId] ?? null;
}

export function getCurrentEntry(progress) {
  if (progress.phase !== 'story') return null;
  return getCurrentScene(progress)?.entries[progress.entryIndex] ?? null;
}

export function advance(progress) {
  const entry = getCurrentEntry(progress);
  if (!entry || entry.type !== 'line') return progress;
  return normalizePosition({ ...progress, entryIndex: progress.entryIndex + 1, updatedAt: Date.now() });
}

export function choose(progress, optionId) {
  const entry = getCurrentEntry(progress);
  if (!entry || entry.type !== 'choice') return progress;
  const option = entry.options.find((candidate) => candidate.id === optionId && matchesCondition(candidate.when, progress.variables));
  if (!option) return progress;

  const chapter = getChapter(progress.chapterId);
  if (option.to && !chapter.scenes[option.to]) throw new Error('Destino da escolha não encontrado.');
  return normalizePosition({
    ...progress,
    variables: { ...progress.variables, ...option.effects },
    choices: [...progress.choices, { sceneId: progress.sceneId, entryIndex: progress.entryIndex, optionId }],
    sceneId: option.to ?? progress.sceneId,
    entryIndex: option.to ? 0 : progress.entryIndex + 1,
    updatedAt: Date.now(),
  });
}

export function finishInterlude(progress) {
  if (progress.phase !== 'interlude' && progress.phase !== 'awaitingNext') return progress;
  const chapter = getChapter(progress.chapterId);
  const next = chapter?.nextChapterId && getChapter(chapter.nextChapterId);
  if (next) return createInitialProgress(next.id);
  return { ...progress, phase: 'awaitingNext', updatedAt: Date.now() };
}

export function isValidProgress(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const chapter = getChapter(value.chapterId);
  if (!chapter || value.schemaVersion !== PROGRESS_SCHEMA_VERSION || value.contentRevision !== chapter.revision) return false;
  if (!STORY_PHASES.includes(value.phase)) return false;
  const scene = chapter.scenes[value.sceneId];
  if (!scene || !Number.isInteger(value.entryIndex) || value.entryIndex < 0 || value.entryIndex >= scene.entries.length) return false;
  if (!Number.isFinite(value.updatedAt) || value.updatedAt <= 0) return false;
  if (!value.variables || typeof value.variables !== 'object' || Array.isArray(value.variables)) return false;
  for (const [key, initial] of Object.entries(chapter.initialVariables)) {
    if (typeof value.variables[key] !== typeof initial) return false;
  }
  if (value.phase === 'story' && !matchesCondition(scene.entries[value.entryIndex].when, value.variables)) return false;
  if (!Array.isArray(value.choices)) return false;
  return value.choices.every((choice) => (
    choice && typeof choice === 'object' &&
    typeof choice.sceneId === 'string' &&
    Number.isInteger(choice.entryIndex) &&
    typeof choice.optionId === 'string'
  ));
}
