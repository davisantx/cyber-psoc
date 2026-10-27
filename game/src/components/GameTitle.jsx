import { GAME } from '../config/game.js';

export default function GameTitle() {
  return (
    <header className="game-title">
      <h1>{GAME.title}</h1>
      {GAME.subtitle && <p className="game-title__subtitle">{GAME.subtitle}</p>}
    </header>
  );
}
