import { useCallback, useEffect, useRef, useState } from 'react';
import { matchesCondition } from '../engine.js';

const LETTER_DELAY = { lenta: 42, normal: 26, rapida: 12 };

export default function DialoguePanel({ entry, variables, textSpeed, reducedMotion, onAdvance, onChoose }) {
  const [visible, setVisible] = useState(reducedMotion ? entry.text?.length ?? 0 : 0);
  const firstChoiceRef = useRef(null);
  const isChoice = entry.type === 'choice';
  const fullText = entry.text ?? '';

  useEffect(() => {
    if (isChoice) {
      firstChoiceRef.current?.focus();
      return undefined;
    }
    if (reducedMotion) {
      setVisible(fullText.length);
      return undefined;
    }
    setVisible(0);
    const timer = setInterval(() => {
      setVisible((count) => {
        if (count >= fullText.length) {
          clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, LETTER_DELAY[textSpeed] ?? LETTER_DELAY.normal);
    return () => clearInterval(timer);
  }, [fullText, isChoice, reducedMotion, textSpeed]);

  const handleAdvance = useCallback(() => {
    if (visible < fullText.length) setVisible(fullText.length);
    else onAdvance();
  }, [fullText.length, onAdvance, visible]);

  useEffect(() => {
    if (isChoice) return undefined;
    const onKey = (event) => {
      if (!['Enter', ' ', 'ArrowRight'].includes(event.key)) return;
      if (document.querySelector('[role="dialog"]')) return;
      if (event.target instanceof Element && event.target.closest('button, input, select, textarea, a')) return;
      event.preventDefault();
      handleAdvance();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleAdvance, isChoice]);

  if (isChoice) {
    const options = entry.options.filter((option) => matchesCondition(option.when, variables));
    return (
      <section className="story-dialogue story-dialogue--choices" aria-label="Escolha narrativa">
        <p className="story-dialogue__speaker">SUA ESCOLHA</p>
        <h2 className="story-dialogue__prompt">{entry.prompt}</h2>
        <div className="story-choice-list">
          {options.map((option, index) => (
            <button
              key={option.id}
              type="button"
              className="story-choice"
              ref={index === 0 ? firstChoiceRef : undefined}
              onClick={() => onChoose(option.id)}
            >
              <span className="story-choice__number">{index + 1}.</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </section>
    );
  }

  const speakerLabel = entry.mode === 'narration'
    ? 'NARRAÇÃO'
    : entry.mode === 'thought'
      ? 'PENSAMENTO · ' + entry.speaker
      : entry.speaker;

  return (
    <section className={'story-dialogue story-dialogue--' + entry.mode} aria-label="Diálogo">
      <p className="story-dialogue__speaker">{speakerLabel}</p>
      <p className="story-dialogue__text" aria-hidden="true">{fullText.slice(0, visible)}<span className="story-dialogue__cursor" aria-hidden="true" /></p>
      <p className="sr-only" aria-live="polite">{fullText}</p>
      <button className="story-dialogue__advance" type="button" onClick={handleAdvance}>
        {visible < fullText.length ? 'MOSTRAR TEXTO' : 'CONTINUAR'} <span aria-hidden="true">›</span>
      </button>
    </section>
  );
}
