import { getChapter } from '../story/registry.js';

const CHAPTER_MENU_BACKGROUNDS = {
  'chapter-01': 'backgrounds/study.webp',
  'chapter-02': 'backgrounds/school_courtyard.webp',
  'chapter-03': 'backgrounds/digital_nina_night.webp',
};

export default function MenuBackground({ savedProgress }) {
  const chapter = savedProgress ? getChapter(savedProgress.chapterId) : null;
  const sceneBgKey = chapter && savedProgress ? chapter.scenes[savedProgress.sceneId]?.background : null;
  const bgPath =
    (chapter && sceneBgKey && chapter.assets.backgrounds?.[sceneBgKey]) ||
    (savedProgress && CHAPTER_MENU_BACKGROUNDS[savedProgress.chapterId]) ||
    CHAPTER_MENU_BACKGROUNDS['chapter-01'];

  return (
    <div className="scene" aria-hidden="true">
      <div
        className="scene__artwork"
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL + bgPath}")` }}
      />
      <div className="scene__vignette" />
      <div className="scene__bokeh" />
      <div className="scene__frame" />
    </div>
  );
}
