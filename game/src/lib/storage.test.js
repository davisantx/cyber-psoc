import assert from 'node:assert/strict';
import test from 'node:test';
import { DEFAULT_PREFERENCES, PREFERENCES_KEY, readPreferences, writePreferences } from './preferences.js';
import { BACKUP_SAVE_KEY, LEGACY_SAVE_KEY, readSave, readSaveStatus, SAVE_KEY, writeSave } from './save.js';
import { createInitialProgress, advance } from '../story/engine.js';
import { nextOptionIndex } from './menuNavigation.js';

function memoryStorage() {
  const items = new Map();
  return { getItem: key => items.get(key) ?? null, setItem: (key, value) => items.set(key, value) };
}

test('preferences persist and invalid fields fall back safely', () => {
  const storage = memoryStorage();
  assert.deepEqual(readPreferences(storage), DEFAULT_PREFERENCES);
  assert.equal(writePreferences({ textSpeed: 'rapida', reducedMotion: true, masterVolume: 45, musicVolume: 120, effectsVolume: 30 }, storage), true);
  assert.deepEqual(readPreferences(storage), { textSpeed: 'rapida', reducedMotion: true, masterVolume: 45, musicVolume: 100, effectsVolume: 30 });
  storage.setItem(PREFERENCES_KEY, '{broken');
  assert.deepEqual(readPreferences(storage), DEFAULT_PREFERENCES);
});

test('narrative progress persists and resumes at the exact line', () => {
  const storage = memoryStorage();
  const progress = advance(createInitialProgress());
  assert.equal(writeSave(progress, storage), true);
  assert.deepEqual(readSave(storage), progress);
  assert.equal(readSave(storage).entryIndex, 1);
});

test('incompatible progress is reported and preserved', () => {
  const storage = memoryStorage();
  const progress = { ...createInitialProgress(), contentRevision: 'old-script' };
  storage.setItem(SAVE_KEY, JSON.stringify(progress));
  assert.equal(readSave(storage), null);
  assert.match(readSaveStatus(storage).issue, /outra versão/);
  assert.equal(storage.getItem(SAVE_KEY), JSON.stringify(progress));
  assert.equal(writeSave(createInitialProgress(), storage), true);
  assert.equal(storage.getItem(BACKUP_SAVE_KEY), JSON.stringify(progress));
  storage.setItem(SAVE_KEY, '{broken');
  assert.match(readSaveStatus(storage).issue, /não pode ser lido/);
  assert.equal(storage.getItem(SAVE_KEY), '{broken');
});

test('legacy progress remains available for manual recovery', () => {
  const storage = memoryStorage();
  storage.setItem(LEGACY_SAVE_KEY, '{"schemaVersion":1}');
  assert.equal(readSave(storage), null);
  assert.match(readSaveStatus(storage).issue, /versão anterior/);
  assert.equal(storage.getItem(LEGACY_SAVE_KEY), '{"schemaVersion":1}');
});

test('arrow navigation wraps around enabled menu options', () => {
  assert.equal(nextOptionIndex('ArrowDown', -1, 3), 0);
  assert.equal(nextOptionIndex('ArrowDown', 2, 3), 0);
  assert.equal(nextOptionIndex('ArrowUp', 0, 3), 2);
  assert.equal(nextOptionIndex('Home', 2, 3), 0);
  assert.equal(nextOptionIndex('End', 0, 3), 2);
});
