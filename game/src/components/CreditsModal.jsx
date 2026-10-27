import ModalShell from './ModalShell.jsx';

const TEAM = [
  'Davi Santos de Mesquita',
  'José Ray Rodrigues Nascimento',
  'Lucas Vinicius David Martins',
  'Matheus Zaino Pinto Oliveira',
  'Pedro Antônio Vieira Sousa',
  'Pedro Ryan Coelho do Nascimento',
];

export default function CreditsModal({ onClose }) {
  return (
    <ModalShell title="Créditos" label="créditos" onClose={onClose}>
      <p className="modal-lead">Um projeto sobre cidadania digital, pensamento crítico e escolhas no mundo conectado.</p>
      <div className="credits-grid">
        <div><span className="credits-label">PROJETO</span><p>Bytes para a Cidadania<br /><strong>Ação de Extensão Cyber</strong></p></div>
        <div><span className="credits-label">CONTEXTO ACADÊMICO</span><p>Curso de Tecnologia em Análise e Desenvolvimento de Sistemas<br />Disciplina: Projeto Social<br />Itapipoca, CE · 2026</p></div>
        <div><span className="credits-label">DOCENTE</span><p>Prof. Me. Luciano Martins</p></div>
        <div><span className="credits-label">EQUIPE</span><ul>{TEAM.map((name) => <li key={name}>{name}</li>)}</ul></div>
      </div>
      <p className="credits-footnote">Informações conforme o documento oficial do projeto disponível neste diretório.</p>
    </ModalShell>
  );
}
