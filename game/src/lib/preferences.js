export const PREFERENCES_KEY = 'cyber:preferences:v1';

export const DEFAULT_PREFERENCES = Object.freeze({
  masterVolume: 80,
  musicVolume: 60,
  effectsVolume: 70,
  textSpeed: 'normal',
  reducedMotion: null,
});

const clampVolume = (value, fallback) =>
  Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : fallback;

export function normalizePreferences(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { ...DEFAULT_PREFERENCES };
  return {
    masterVolume: clampVolume(value.masterVolume, DEFAULT_PREFERENCES.masterVolume),
    musicVolume: clampVolume(value.musicVolume, DEFAULT_PREFERENCES.musicVolume),
    effectsVolume: clampVolume(value.effectsVolume, DEFAULT_PREFERENCES.effectsVolume),
    textSpeed: ['lenta', 'normal', 'rapida'].includes(value.textSpeed) ? value.textSpeed : 'normal',
    reducedMotion: typeof value.reducedMotion === 'boolean' ? value.reducedMotion : null,
  };
}

export function readPreferences(storage = globalThis.localStorage) {
  try {
    return normalizePreferences(JSON.parse(storage.getItem(PREFERENCES_KEY)));
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function writePreferences(value, storage = globalThis.localStorage) {
  try {
    storage.setItem(PREFERENCES_KEY, JSON.stringify(normalizePreferences(value)));
    return true;
  } catch {
    return false;
  }
}
