import { useRef, useState } from 'react';
import GameTitle from './GameTitle.jsx';
import MenuButton from './MenuButton.jsx';
import { GAME } from '../config/game.js';
import { nextOptionIndex } from '../lib/menuNavigation.js';
import { playMenuCue } from '../lib/menuAudio.js';
import { CHAPTER_LIST, getChapter } from '../story/registry.js';

export default function MainMenu({
  hasSave,
  savedProgress,
  saveIssue,
  preferences,
  onNewGame,
  onContinue,
  onChapters,
  onSettings,
  onCredits,
}) {
  const [active, setActive] = useState(hasSave ? 1 : 0);
  const menuRef = useRef(null);
  const savedChapter = savedProgress ? getChapter(savedProgress.chapterId) : null;
  const savedScene =
    savedChapter && savedProgress ? savedChapter.scenes[savedProgress.sceneId] : null;
  const savedBg =
    savedChapter && savedScene
      ? savedChapter.assets.backgrounds?.[savedScene.background]
      : null;
  const savedPortrait = savedChapter?.assets.portraits?.normal ?? null;

  const entries = [
    { label: 'Novo Jogo', action: onNewGame },
    { label: 'Continuar', action: onContinue, disabled: !hasSave },
    { label: 'Capítulos', action: onChapters },
    { label: 'Configurações', action: onSettings },
    { label: 'Créditos', action: onCredits },
  ];

  function handleMenuKeyDown(event) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const enabled = [...menuRef.current.querySelectorAll('.menu-button:not(:disabled)')];
    const current = enabled.indexOf(document.activeElement);
    const next = nextOptionIndex(event.key, current, enabled.length);
    enabled[next]?.focus();
  }

  return (
    <main className="menu-screen" id="main-menu">
      <div className="menu-screen__content">
        <div className="menu-screen__left">
          <GameTitle />
          <nav
            className="menu-nav"
            aria-label="Menu principal"
            onKeyDown={handleMenuKeyDown}
            ref={menuRef}
          >
            {entries.map((entry, index) => (
              <MenuButton
                key={entry.label}
                index={index}
                active={active === index}
                disabled={entry.disabled}
                description={index === 1}
                onClick={() => {
                  playMenuCue('confirm', preferences);
                  entry.action();
                }}
                onFocus={() => {
                  setActive(index);
                  playMenuCue('move', preferences);
                }}
                onMouseEnter={() => {
                  if (!entry.disabled && active !== index) {
                    setActive(index);
                    playMenuCue('move', preferences);
                  }
                }}
              >
                {entry.label}
              </MenuButton>
            ))}
          </nav>
          {saveIssue && (
            <p className="menu-nav__save-issue" role="status">
              {saveIssue}
            </p>
          )}
        </div>

        <aside className="menu-screen__right" aria-label="Status da sessão">
          {hasSave && savedChapter ? (
            <div
              id="continue-description"
              className="menu-session-card menu-session-card--active"
              onClick={() => {
                playMenuCue('confirm', preferences);
                onContinue();
              }}
              role="button"
              tabIndex={-1}
              aria-label={`Continuar Capítulo ${savedChapter.number}: ${savedChapter.title}`}
            >
              <div
                className="menu-session-card__art"
                style={
                  savedBg
                    ? { backgroundImage: `url("${import.meta.env.BASE_URL + savedBg}")` }
                    : undefined
                }
                aria-hidden="true"
              >
                <div className="menu-session-card__art-overlay" />
                {savedPortrait && (
                  <img
                    className="menu-session-card__portrait"
                    src={import.meta.env.BASE_URL + savedPortrait}
                    alt=""
                  />
                )}
              </div>
              <div className="menu-session-card__body">
                <span className="menu-session-card__kicker">
                  SESSÃO SALVA · CAPÍTULO {savedChapter.number}
                </span>
                <strong className="menu-session-card__title">{savedChapter.title}</strong>
                <span className="menu-session-card__meta">
                  Protagonista: <strong>{savedChapter.protagonist.name}</strong>
                </span>
                {savedScene && (
                  <span className="menu-session-card__place">
                    {savedScene.act} · {savedScene.setting}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div
              id="continue-description"
              className="menu-session-card"
              onClick={() => {
                playMenuCue('confirm', preferences);
                onChapters();
              }}
              role="button"
              tabIndex={-1}
            >
              <div className="menu-session-card__body">
                <span className="menu-session-card__kicker">
                  ANTOLOGIA VISUAL NOVEL · {CHAPTER_LIST.length} CAPÍTULOS
                </span>
                <strong className="menu-session-card__title">
                  Três olhares sobre o mundo conectado
                </strong>
                <span className="menu-session-card__place">
                  Acompanhe André, Lia e Nina diante de boatos, clickbait e segurança digital.
                </span>
              </div>
            </div>
          )}
        </aside>
      </div>

      <footer className="menu-footer">
        <span>
          {GAME.project} · {GAME.action}
        </span>
        <span>v{GAME.version}</span>
      </footer>
    </main>
  );
}
