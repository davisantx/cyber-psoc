// Sem arquivos de áudio nesta etapa. Adicione arquivos locais antes de ativar os controles.
export const AUDIO_ASSETS = {
  ambient: null,
  rain: null,
  move: null,
  confirm: null,
  back: null,
};

// A reprodução contínua de ambiente ainda não foi implementada.
export const MUSIC_PLAYER_READY = false;
export const HAS_MUSIC = MUSIC_PLAYER_READY && Boolean(AUDIO_ASSETS.ambient || AUDIO_ASSETS.rain);
export const HAS_EFFECTS = Boolean(AUDIO_ASSETS.move || AUDIO_ASSETS.confirm || AUDIO_ASSETS.back);
export const HAS_AUDIO = HAS_MUSIC || HAS_EFFECTS;
