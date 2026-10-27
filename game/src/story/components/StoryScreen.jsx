import { useCallback, useEffect } from 'react';
import { advance, choose, finishInterlude, getCurrentEntry, getCurrentScene } from '../engine.js';
import { getChapter } from '../registry.js';
import DialoguePanel from './DialoguePanel.jsx';
import InterludeScreen from './InterludeScreen.jsx';
import NextChapterPlaceholder from './NextChapterPlaceholder.jsx';

export default function StoryScreen({ progress, preferences, reducedMotion, saveWarning, onProgress, onOpenChapters, onBack }) {
  const chapter = progress && getChapter(progress.chapterId);
  const scene = progress && getCurrentScene(progress);
  const entry = progress && getCurrentEntry(progress);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      if (document.querySelector('[role="dialog"]')) return;
      event.preventDefault();
      onBack();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onBack]);

  const handleAdvance = useCallback(() => onProgress(advance(progress)), [onProgress, progress]);
  const handleChoose = useCallback((optionId) => onProgress(choose(progress, optionId)), [onProgress, progress]);

  if (!chapter || !scene) return null;
  if (progress.phase === 'interlude') {
    return (
      <InterludeScreen
        progress={progress}
        scene={scene}
        reducedMotion={reducedMotion}
        onProgress={onProgress}
        onOpenChapters={onOpenChapters}
      />
    );
  }
  if (progress.phase === 'awaitingNext') {
    const nextChapter = chapter.nextChapterId && getChapter(chapter.nextChapterId);
    return (
      <NextChapterPlaceholder
        chapter={chapter}
        nextChapter={nextChapter}
        onContinue={() => onProgress(finishInterlude(progress))}
        onOpenChapters={onOpenChapters}
        onBack={onBack}
      />
    );
  }

  const speakerPortraits = entry.type === 'line' && entry.mode === 'dialogue'
    ? chapter.assets.supportingPortraits?.[entry.speaker]
    : null;
  const portraitKey = entry.type === 'choice' ? 'pensativo' : entry.expression;
  const portraits = speakerPortraits ?? chapter.assets.portraits;
  const portrait = entry.type === 'line' && entry.mode === 'narration'
    ? null
    : portraits[portraitKey] ?? portraits.normal;
  const background = chapter.assets.backgrounds?.[scene.background];

  return (
    <main className={'story-stage story-stage--' + scene.background} style={background ? { backgroundImage: `url("${import.meta.env.BASE_URL + background}")`, backgroundPosition: 'center', backgroundSize: 'cover' } : undefined}>
      <header className="story-topbar">
        <div>
          <span className="story-topbar__chapter">CAPÍTULO {chapter.number} · {chapter.title}</span>
          <span className="story-topbar__act">{scene.act} · Protagonista: {chapter.protagonist.name}</span>
        </div>
        <div className="story-topbar__actions">
          <button className="story-topbar__chapters" type="button" onClick={onOpenChapters}>CAPÍTULOS</button>
          <button className="story-topbar__menu" type="button" onClick={onBack}>MENU</button>
        </div>
      </header>
      <div className="story-stage__setting">
        <span>{scene.setting}</span>
        <small>Cenário ilustrado · história fictícia</small>
      </div>
      {portrait && <img className={'story-portrait' + (speakerPortraits ? ' story-portrait--supporting' : '')} src={import.meta.env.BASE_URL + portrait} alt="" aria-hidden="true" />}
      {saveWarning && <p className="story-save-warning" role="alert">{saveWarning}</p>}
      <DialoguePanel
        key={progress.chapterId + ':' + progress.sceneId + ':' + progress.entryIndex}
        entry={entry}
        variables={progress.variables}
        textSpeed={preferences.textSpeed}
        reducedMotion={reducedMotion}
        onAdvance={handleAdvance}
        onChoose={handleChoose}
      />
    </main>
  );
}
