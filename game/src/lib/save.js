import { isValidProgress } from '../story/engine.js';

export const SAVE_KEY = 'cyber:save:v2';
export const LEGACY_SAVE_KEY = 'cyber:save:v1';
export const BACKUP_SAVE_KEY = 'cyber:save:incompatible-backup';

export const isValidSave = isValidProgress;

export function readSaveStatus(storage = globalThis.localStorage) {
  try {
    const raw = storage?.getItem(SAVE_KEY);
    if (raw !== null && raw !== undefined) {
      let value;
      try {
        value = JSON.parse(raw);
      } catch {
        return { save: null, issue: 'Há um progresso salvo que não pode ser lido. Ele foi preservado neste navegador.' };
      }
      if (isValidSave(value)) return { save: value, issue: null };
      return { save: null, issue: 'Há um progresso de outra versão do roteiro. Ele foi preservado; iniciar novo jogo criará um registro atual.' };
    }
    if (storage?.getItem(LEGACY_SAVE_KEY)) {
      return { save: null, issue: 'Há um progresso de uma versão anterior, preservado neste navegador, mas incompatível com o capítulo atual.' };
    }
    return { save: null, issue: null };
  } catch {
    return { save: null, issue: 'O armazenamento local não está disponível neste navegador.' };
  }
}

export function readSave(storage = globalThis.localStorage) {
  return readSaveStatus(storage).save;
}

export function writeSave(progress, storage = globalThis.localStorage) {
  if (!isValidSave(progress)) return false;
  try {
    const previous = storage.getItem(SAVE_KEY);
    if (previous) {
      let previousValid = false;
      try { previousValid = isValidSave(JSON.parse(previous)); } catch { /* Keep unreadable data as a backup. */ }
      if (!previousValid) {
        const backup = storage.getItem(BACKUP_SAVE_KEY);
        if (backup && backup !== previous) return false;
        if (!backup) storage.setItem(BACKUP_SAVE_KEY, previous);
      }
    }
    storage.setItem(SAVE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}
