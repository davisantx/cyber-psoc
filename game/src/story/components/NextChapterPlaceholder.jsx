import { useEffect, useRef } from 'react';

export default function NextChapterPlaceholder({ chapter, nextChapter, onContinue, onOpenChapters, onBack }) {
  const backRef = useRef(null);
  const continueRef = useRef(null);
  useEffect(() => { (nextChapter ? continueRef : backRef).current?.focus(); }, [nextChapter]);
  return (
    <main className="next-chapter-screen">
      <div className="next-chapter-screen__panel">
        <p className="section-kicker">CYBER · OUTRAS HISTÓRIAS</p>
        <h1>{nextChapter ? 'Uma nova história está pronta.' : 'Jornada concluída até aqui.'}</h1>
        <p>{nextChapter
          ? `A história de ${chapter.protagonist.name} terminou. O Capítulo ${nextChapter.number}, “${nextChapter.title}”, acompanha ${nextChapter.protagonist.name}.`
          : `A história de ${chapter.protagonist.name} chegou ao fim. Você pode revisitar qualquer um dos três capítulos para explorar outras escolhas e desfechos.`}</p>
        <div className="next-chapter-screen__actions">
          {nextChapter && <button className="return-button return-button--primary" type="button" onClick={onContinue} ref={continueRef}>INICIAR CAPÍTULO {nextChapter.number}</button>}
          {onOpenChapters && <button className="return-button" type="button" onClick={onOpenChapters}>ESCOLHER CAPÍTULO</button>}
          <button className="return-button" type="button" onClick={onBack} ref={backRef}>VOLTAR AO MENU</button>
        </div>
      </div>
    </main>
  );
}
