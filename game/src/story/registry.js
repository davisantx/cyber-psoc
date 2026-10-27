import { chapter01 } from './chapters/chapter01.js';
import { chapter02 } from './chapters/chapter02.js';
import { chapter03 } from './chapters/chapter03.js';

// New chapters are registered here. A chapter may point to the next chapter's id.
export const CHAPTER_LIST = Object.freeze([
  chapter01,
  chapter02,
  chapter03,
]);

export const CHAPTERS = Object.freeze({
  [chapter01.id]: chapter01,
  [chapter02.id]: chapter02,
  [chapter03.id]: chapter03,
});

export const FIRST_CHAPTER_ID = chapter01.id;

export function getChapter(chapterId) {
  return CHAPTERS[chapterId] ?? null;
}

