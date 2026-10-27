import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { advance, choose, createInitialProgress, finishInterlude, getCurrentEntry, isValidProgress } from './engine.js';
import { CHAPTER_LIST, CHAPTERS } from './registry.js';

test('every spoken line has an existing portrait for its speaker and expression', () => {
  for (const chapter of Object.values(CHAPTERS)) {
    for (const scene of Object.values(chapter.scenes)) {
      for (const entry of scene.entries) {
        if (entry.type !== 'line' || entry.mode !== 'dialogue') continue;
        const portraits = chapter.assets.supportingPortraits?.[entry.speaker]
          ?? (entry.speaker === chapter.protagonist.name && chapter.assets.portraits);
        assert.ok(portraits, `${chapter.id}: no portraits for ${entry.speaker}`);
        const portrait = portraits[entry.expression ?? 'normal'];
        assert.ok(portrait, `${chapter.id}: no ${entry.expression} portrait for ${entry.speaker}`);
        assert.ok(existsSync(fileURLToPath(new URL(`../../public/${portrait}`, import.meta.url))), portrait);
      }
    }
  }
});

test('every scene has an existing illustrated background', () => {
  for (const chapter of Object.values(CHAPTERS)) {
    for (const scene of Object.values(chapter.scenes)) {
      const background = chapter.assets.backgrounds?.[scene.background];
      assert.ok(background, `${chapter.id}: no background for ${scene.background}`);
      assert.ok(existsSync(fileURLToPath(new URL(`../../public/${background}`, import.meta.url))), background);
    }
  }
});

function play(first, second, group, last) {
  let progress = createInitialProgress();
  const picks = {
    boato_banca: first,
    boato_local: second,
    reparar_grupo: group,
    apoio_grupo: group,
    ultima_noite: last,
  };
  for (let turns = 0; turns < 300; turns += 1) {
    if (progress.phase === 'interlude') return progress;
    const entry = getCurrentEntry(progress);
    assert.ok(entry, 'there must be a playable entry');
    progress = entry.type === 'choice' ? choose(progress, picks[progress.sceneId]) : advance(progress);
  }
  throw new Error('Narrative did not reach its ending.');
}

test('all combinations of chapter 1 decisions reach chapter 2', () => {
  for (const first of ['portal', 'grupo', 'revisar']) {
    for (const second of ['cartao', 'telefone', 'compartilhar']) {
      const groupOptions = second === 'compartilhar' ? ['corrigir', 'apagar'] : ['orientar', 'descansar'];
      for (const group of groupOptions) {
        for (const last of ['dormir', 'rolar']) {
          const ending = play(first, second, group, last);
          assert.equal(ending.phase, 'interlude');
          assert.ok(ending.sceneId.startsWith('fim_'));
          assert.equal(ending.choices.length, 4);
          assert.equal(isValidProgress(ending), true);
          const next = finishInterlude(ending);
          assert.equal(next.phase, 'story');
          assert.equal(next.chapterId, 'chapter-02');
          assert.equal(next.choices.length, 0);
        }
      }
    }
  }
});

function playChapter2(first, second, third, fourth) {
  let progress = createInitialProgress('chapter-02');
  const picks = {
    recomendacao: first,
    resposta_grupo: second,
    ensaio: third,
    reparar_grupo: fourth,
    conversa_final: fourth,
  };
  for (let turns = 0; turns < 300; turns += 1) {
    if (progress.phase === 'interlude') return progress;
    const entry = getCurrentEntry(progress);
    assert.ok(entry, 'chapter 2 must have a playable entry');
    progress = entry.type === 'choice' ? choose(progress, picks[progress.sceneId]) : advance(progress);
  }
  throw new Error('Chapter 2 did not reach its ending.');
}

test('all combinations of chapter 2 decisions reach a valid ending', () => {
  for (const first of ['abrir', 'perfil', 'repassar']) {
    for (const second of ['contexto', 'curto', 'privado']) {
      for (const third of ['explicar', 'seguir']) {
        for (const fourth of first === 'repassar' ? ['assumir', 'apagar'] : ['guia', 'conversa']) {
          const ending = playChapter2(first, second, third, fourth);
          assert.equal(ending.phase, 'interlude');
          assert.equal(ending.choices.length, 4);
          assert.equal(isValidProgress(ending), true);
          const next = finishInterlude(ending);
          assert.equal(next.chapterId, 'chapter-03');
          assert.equal(next.phase, 'story');
        }
      }
    }
  }
});

test('chapter 2 endings reflect repair and group choices', () => {
  assert.equal(playChapter2('repassar', 'contexto', 'explicar', 'assumir').sceneId, 'fim_reparacao');
  assert.equal(playChapter2('repassar', 'curto', 'seguir', 'apagar').sceneId, 'fim_eco');
  assert.equal(playChapter2('abrir', 'contexto', 'explicar', 'guia').sceneId, 'fim_guia');
  assert.equal(playChapter2('perfil', 'privado', 'seguir', 'conversa').sceneId, 'fim_cotidiano');
});

function playChapter3(first, second, third, fourth) {
  let progress = createInitialProgress('chapter-03');
  const picks = {
    anuncio: first,
    pedido_acesso: second,
    mensagem_grupo: third,
    escolha_recuperacao: fourth,
    escolha_apoio: fourth,
  };
  for (let turns = 0; turns < 300; turns += 1) {
    if (progress.phase === 'interlude') return progress;
    const entry = getCurrentEntry(progress);
    assert.ok(entry, 'chapter 3 must have a playable entry');
    progress = entry.type === 'choice' ? choose(progress, picks[progress.sceneId]) : advance(progress);
  }
  throw new Error('Chapter 3 did not reach its ending.');
}

test('all 54 combinations of chapter 3 decisions reach a valid ending', () => {
  for (const first of ['origem', 'lia', 'abrir']) {
    for (const second of ['fechar', 'entrar', 'negar']) {
      for (const third of ['grupo', 'lia', 'apagar']) {
        for (const fourth of second === 'entrar' ? ['proteger', 'so_apagar'] : ['ajudar', 'conversar']) {
          const ending = playChapter3(first, second, third, fourth);
          assert.equal(ending.phase, 'interlude');
          assert.equal(ending.choices.length, 4);
          assert.equal(isValidProgress(ending), true);
          assert.equal(finishInterlude(ending).phase, 'awaitingNext');
        }
      }
    }
  }
});

test('chapter 3 endings distinguish account recovery, delay, and peer support', () => {
  assert.equal(playChapter3('abrir', 'entrar', 'grupo', 'proteger').sceneId, 'fim_recuperacao');
  assert.equal(playChapter3('lia', 'entrar', 'apagar', 'so_apagar').sceneId, 'fim_pendente');
  assert.equal(playChapter3('origem', 'fechar', 'grupo', 'ajudar').sceneId, 'fim_apoio');
  assert.equal(playChapter3('origem', 'negar', 'lia', 'conversar').sceneId, 'fim_atencao');
});

test('an old chapter 1 save at the former placeholder can enter chapter 2', () => {
  const oldPlaceholder = { ...play('portal', 'cartao', 'orientar', 'dormir'), phase: 'awaitingNext' };
  assert.equal(isValidProgress(oldPlaceholder), true);
  assert.equal(finishInterlude(oldPlaceholder).chapterId, 'chapter-02');
});

test('an old chapter 2 save at the former placeholder can enter chapter 3', () => {
  const oldPlaceholder = { ...playChapter2('abrir', 'contexto', 'explicar', 'guia'), phase: 'awaitingNext' };
  assert.equal(isValidProgress(oldPlaceholder), true);
  assert.equal(finishInterlude(oldPlaceholder).chapterId, 'chapter-03');
});

test('sharing, correcting, and resting change later events and the ending', () => {
  const corrected = play('portal', 'compartilhar', 'corrigir', 'dormir');
  assert.equal(corrected.sceneId, 'fim_correcao');
  assert.equal(corrected.variables.sharedRumor, true);
  assert.equal(corrected.variables.correctedGroup, true);
  assert.equal(corrected.variables.rested, true);

  const silent = play('portal', 'compartilhar', 'apagar', 'dormir');
  assert.equal(silent.sceneId, 'fim_silencio');
  assert.equal(silent.variables.correctedGroup, false);

  const tired = play('revisar', 'cartao', 'orientar', 'rolar');
  assert.equal(tired.sceneId, 'fim_cansaco');
  assert.equal(tired.variables.reorganizedStudy, true);
  assert.equal(tired.variables.rested, false);
});

test('invalid destinations and stale content revisions cannot be resumed', () => {
  const progress = createInitialProgress();
  assert.equal(isValidProgress({ ...progress, sceneId: 'missing' }), false);
  assert.equal(isValidProgress({ ...progress, contentRevision: '0' }), false);
  assert.equal(isValidProgress({ ...progress, variables: {} }), false);
});

test('all chapters in CHAPTER_LIST can be started directly', () => {
  assert.equal(CHAPTER_LIST.length, 3);
  for (const chapter of CHAPTER_LIST) {
    const progress = createInitialProgress(chapter.id);
    assert.equal(isValidProgress(progress), true);
    assert.equal(progress.chapterId, chapter.id);
    assert.equal(progress.sceneId, chapter.firstSceneId);
    assert.equal(progress.phase, 'story');
    assert.ok(getCurrentEntry(progress), `chapter ${chapter.id} has an opening entry`);
  }
});
