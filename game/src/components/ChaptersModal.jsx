import ModalShell from './ModalShell.jsx';
import { CHAPTER_LIST, getChapter } from '../story/registry.js';
import { playMenuCue } from '../lib/menuAudio.js';

const CHAPTER_HIGHLIGHTS = {
  'chapter-01': {
    theme: 'Verificação de fontes oficiais e boatos em véspera de concurso',
    previewBg: 'backgrounds/study.webp',
  },
  'chapter-02': {
    theme: 'Clickbait, checagem de contexto e reparação no grupo escolar',
    previewBg: 'backgrounds/school_courtyard.webp',
  },
  'chapter-03': {
    theme: 'Permissões abusivas, proteção de senha e segurança de conta',
    previewBg: 'backgrounds/digital_nina_night.webp',
  },
};

export default function ChaptersModal({
  activeProgress,
  inStory = false,
  preferences,
  onSelectChapter,
  onContinueSaved,
  onClose,
}) {
  const activeChapter = activeProgress ? getChapter(activeProgress.chapterId) : null;
  const activeScene = activeChapter && activeProgress ? activeChapter.scenes[activeProgress.sceneId] : null;

  return (
    <ModalShell
      title="Selecionar Capítulo"
      label="seleção de capítulos"
      returnLabel={inStory ? 'VOLTAR À HISTÓRIA' : 'VOLTAR AO MENU'}
      wide
      onClose={onClose}
    >
      <p className="modal-lead">
        Escolha qualquer uma das três histórias de <strong>CYBER</strong> para jogar diretamente. Cada capítulo acompanha um protagonista diante de um desafio real de cidadania digital.
      </p>

      <div className="chapter-select-list" role="list">
        {CHAPTER_LIST.map((chapter) => {
          const isCurrent = activeProgress?.chapterId === chapter.id;
          const firstScene = chapter.scenes[chapter.firstSceneId];
          const meta = CHAPTER_HIGHLIGHTS[chapter.id] ?? {};
          const bgPath = meta.previewBg ?? chapter.assets.backgrounds?.[firstScene?.background];
          const portraitPath = chapter.assets.portraits?.normal;
          const hasAdvancedInChapter = isCurrent && (
            activeProgress.entryIndex > 0 ||
            activeProgress.choices?.length > 0 ||
            activeProgress.sceneId !== chapter.firstSceneId ||
            activeProgress.phase !== 'story'
          );

          return (
            <article
              key={chapter.id}
              role="listitem"
              className={'chapter-card' + (isCurrent ? ' chapter-card--current' : '')}
            >
              <div
                className="chapter-card__visual"
                style={bgPath ? { backgroundImage: `url("${import.meta.env.BASE_URL + bgPath}")` } : undefined}
                aria-hidden="true"
              >
                <div className="chapter-card__visual-overlay" />
                <span className="chapter-card__number">0{chapter.number}</span>
                {portraitPath && (
                  <img
                    className="chapter-card__portrait"
                    src={import.meta.env.BASE_URL + portraitPath}
                    alt=""
                  />
                )}
              </div>

              <div className="chapter-card__body">
                <div className="chapter-card__header">
                  <span className="chapter-card__kicker">
                    CAPÍTULO {chapter.number} · PROTAGONISTA: {chapter.protagonist.name.toUpperCase()}
                  </span>
                  {isCurrent && (
                    <span className="chapter-card__badge">
                      {inStory ? 'CAPÍTULO ATUAL' : 'SALVO AQUI'}
                    </span>
                  )}
                </div>

                <h3 className="chapter-card__title">{chapter.title}</h3>
                <p className="chapter-card__context">{chapter.context}</p>

                <div className="chapter-card__meta">
                  <span>{firstScene?.setting}</span>
                  {meta.theme && <span>{meta.theme}</span>}
                </div>

                {isCurrent && activeScene && (
                  <p className="chapter-card__progress-info">
                    Progresso atual: <strong>{activeScene.act}</strong> ({activeScene.setting})
                  </p>
                )}

                <div className="chapter-card__actions">
                  {isCurrent && !inStory && onContinueSaved ? (
                    <>
                      <button
                        type="button"
                        className="chapter-card__btn chapter-card__btn--primary"
                        onClick={() => {
                          playMenuCue('confirm', preferences);
                          onContinueSaved();
                        }}
                      >
                        CONTINUAR DE ONDE PAROU
                      </button>
                      {hasAdvancedInChapter && (
                        <button
                          type="button"
                          className="chapter-card__btn chapter-card__btn--secondary"
                          onClick={() => {
                            playMenuCue('confirm', preferences);
                            onSelectChapter(chapter.id);
                          }}
                        >
                          RECOMEÇAR CAPÍTULO {chapter.number}
                        </button>
                      )}
                    </>
                  ) : isCurrent && inStory ? (
                    <>
                      <button
                        type="button"
                        className="chapter-card__btn chapter-card__btn--primary"
                        onClick={() => {
                          playMenuCue('confirm', preferences);
                          onClose();
                        }}
                      >
                        CONTINUAR NESTE CAPÍTULO
                      </button>
                      <button
                        type="button"
                        className="chapter-card__btn chapter-card__btn--secondary"
                        onClick={() => {
                          playMenuCue('confirm', preferences);
                          onSelectChapter(chapter.id);
                        }}
                      >
                        RECOMEÇAR DO INÍCIO
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="chapter-card__btn chapter-card__btn--primary"
                      onClick={() => {
                        playMenuCue('confirm', preferences);
                        onSelectChapter(chapter.id);
                      }}
                    >
                      {inStory ? `IR PARA CAPÍTULO ${chapter.number}` : `INICIAR CAPÍTULO ${chapter.number}`}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeChapter && (
        <p className="chapter-select-footnote">
          Ao iniciar outro capítulo diretamente, o progresso salvo passa a acompanhar o capítulo escolhido. E ao concluir os Capítulos 1 e 2, a história avança automaticamente para o capítulo seguinte.
        </p>
      )}
    </ModalShell>
  );
}
