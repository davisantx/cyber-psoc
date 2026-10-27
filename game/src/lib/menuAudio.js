import { AUDIO_ASSETS } from '../config/assets.js';

const players = new Map();

// Sons só podem começar após interação do jogador; com caminhos nulos, não há áudio.
export function playMenuCue(cue, preferences) {
  const source = AUDIO_ASSETS[cue];
  if (!source || typeof Audio === 'undefined') return false;
  let player = players.get(cue);
  if (!player) {
    player = new Audio(source);
    players.set(cue, player);
  }
  player.pause();
  player.currentTime = 0;
  player.volume = (preferences.masterVolume / 100) * (preferences.effectsVolume / 100);
  player.play().catch(() => {});
  return true;
}
