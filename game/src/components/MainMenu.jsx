import { Fragment, useRef, useState } from 'react';
import GameTitle from './GameTitle.jsx';
import MenuButton from './MenuButton.jsx';
import { GAME } from '../config/game.js';
import { nextOptionIndex } from '../lib/menuNavigation.js';
import { playMenuCue } from '../lib/menuAudio.js';
import { CHAPTER_LIST, getChapter } from '../story/registry.js';

export default function MainMenu({ hasSave, savedProgress, saveIssue, preferences, onNewGame, onContinue, onChapters, onSettings, onCredits }) {
  const [active, setActive] = useState(0);
  const menuRef = useRef(null);
  const savedChapter = savedProgress ? getChapter(savedProgress.chapterId) : null;
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
      <GameTitle />
      <nav className="menu-nav" aria-label="Menu principal" onKeyDown={handleMenuKeyDown} ref={menuRef}>
        {entries.map((entry, index) => (
          <Fragment key={entry.label}>
            <MenuButton
              index={index}
              active={active === index}
              disabled={entry.disabled}
              description={index === 1}
              onClick={() => { playMenuCue('confirm', preferences); entry.action(); }}
              onFocus={() => { setActive(index); playMenuCue('move', preferences); }}
              onMouseEnter={() => { if (!entry.disabled && active !== index) { setActive(index); playMenuCue('move', preferences); } }}
            >{entry.label}</MenuButton>
            {index === 1 && !hasSave && <p id="continue-description" className="menu-nav__hint">Sem partida salva</p>}
            {index === 1 && hasSave && savedChapter && (
              <p id="continue-description" className="menu-nav__hint menu-nav__hint--active">
                Cap. {savedChapter.number} · {savedChapter.protagonist.name} — {savedChapter.title}
              </p>
            )}
            {index === 2 && (
              <p className="menu-nav__hint">
                {CHAPTER_LIST.length} histórias completas · André, Lia e Nina
              </p>
            )}
          </Fragment>
        ))}
        <p className="menu-nav__development">Capítulos 1 a 3 disponíveis</p>
        {saveIssue && <p className="menu-nav__save-issue" role="status">{saveIssue}</p>}
      </nav>
      <footer className="menu-footer">
        <span>{GAME.project}</span>
        <span>v{GAME.version}</span>
      </footer>
    </main>
  );
}
