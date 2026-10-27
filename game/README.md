# CYBER — Visual Novel

Jogo da ação de extensão **Bytes para a Cidadania — Cyber**, voltado a estudantes do Ensino Fundamental II. Há três capítulos jogáveis com protagonistas diferentes: André enfrenta boatos sobre um concurso fictício; Lia acompanha a propagação de uma notícia falsa no grupo da escola; Nina encontra um aplicativo que promete revelar visitantes do perfil. A tela inicial mantém o design abstrato aprovado provisoriamente.

## Executar

Requer Node.js 20.19+ e npm. Na pasta `game`:

```bash
npm install
npm run dev
```

Abra o endereço local indicado pelo Vite. Para validar:

```bash
npm test
npm run build
npm run preview
```

O aplicativo usa arquivos locais e não faz chamadas a APIs. Execute por HTTP local; a abertura de módulos JavaScript por `file://` pode falhar.

## Jogar

- **Novo Jogo** inicia o Capítulo 1. Se houver progresso válido, o menu confirma antes de substituí-lo ou permite escolher outro capítulo.
- **Continuar** restaura capítulo, cena, posição da fala, escolhas, variáveis e fase da transição. Fica desabilitado sem progresso válido.
- **Capítulos** (no menu inicial e no topo da tela durante a partida) permite pular diretamente para o início do Capítulo 1 (André), Capítulo 2 (Lia) ou Capítulo 3 (Nina).
- Clique em **MOSTRAR TEXTO** para completar a fala gradual; o clique seguinte em **CONTINUAR** avança. Enter, Espaço ou seta para a direita também avançam quando o foco não está em outro controle.
- Escolhas são feitas pelos botões, com mouse ou teclado. O botão **MENU** e Escape retornam à tela inicial; o progresso é salvo a cada avanço.
- A velocidade do texto e a redução de movimento usam as preferências existentes.
- Depois dos encerramentos dos Capítulos 1 e 2, “Enquanto isso...” inicia automaticamente o capítulo seguinte. Partidas antigas salvas na tela de espera podem iniciar o novo capítulo por um botão.

## Conteúdo atual

**Capítulo 1 — Três anos de preparação:** André trabalha, estuda e se prepara para a prova de assistente administrativo de Aurora do Vale. Postagens não oficiais sobre a banca e o local da prova exploram o nervosismo da véspera. Quatro decisões podem mudar suas conversas, o descanso, o efeito de um boato no grupo e a conclusão.

**Capítulo 2 — O que chegou ao grupo:** Lia e Tomás preparam a rádio da feira cultural na Escola do Farol. A capa ambígua de um vídeo sobre o cantor fictício Ravi Maré vira um boato de morte no grupo da turma. Quatro decisões permitem assistir, buscar fontes, responder à turma, usar ou não o microfone e reparar um compartilhamento precipitado. Há quatro encerramentos. Ao final, a transição inicia o Capítulo 3.

**Capítulo 3 — Quem viu meu perfil?:** Nina encontra, após a feira, um anúncio de aplicativo que promete mostrar visitantes do perfil na rede fictícia Vitra. A página pede senha e acesso a mensagens; as escolhas determinam se sua conta fica exposta, como ela avisa os colegas e se toma medidas para protegê-la. Há quatro encerramentos.

O município, o concurso, o Instituto Vereda, a Escola do Farol e Ravi Maré são fictícios. O roteiro distingue mensagens de terceiros de publicações consultadas diretamente. Nenhum resultado de concurso real é apresentado.

## Estrutura

- `src/story/chapters/chapter01.js`: roteiro em dados, com cenas, falas, pensamentos, escolhas, condições, efeitos e encerramentos.
- `src/story/chapters/chapter02.js`: segunda história, com protagonista, variáveis, escolhas e encerramentos próprios.
- `src/story/chapters/chapter03.js`: terceira história, sobre a promessa de um aplicativo de visitantes e a proteção da conta.
- `src/story/registry.js`: registro dos capítulos implementados.
- `src/story/engine.js`: navegação e avaliação de condições, sem dependência de React.
- `src/story/components/`: palco, diálogo gradual, transição e tela temporária do capítulo seguinte.
- `src/lib/save.js`: leitura, validação e escrita do progresso local.
- `src/App.jsx`: integração entre menu, capítulo, modais e salvamento.
- `src/styles.css`: estilos do menu e do sistema narrativo.
- `public/characters/andre/`: cópias locais de seis expressões do personagem 9 existente na pasta superior.
- `public/characters/lia/`: cópias locais de seis expressões do personagem 8 existente na pasta superior.
- `public/characters/nina/`: cópias locais de seis expressões do personagem 4 existente na pasta superior.
- `public/backgrounds/`: treze cenários ilustrados em WebP para as cenas dos três capítulos.
- `public/characters/mae/`, `luana/`, `tomas/` e `nadia/`: seis expressões inéditas por personagem, usadas nas falas dos dois capítulos.
- `../fichas_secundarios/` e `../recortar_secundarios.py`: fichas originais geradas e script para recortar os retratos do jogo.

Os três capítulos usam cenários ilustrados: casa, trajeto e sala de prova de André; pátio, corredor, rádio e portão da Escola do Farol; e ambientes de celular adequados a cada história. Os sprites de André, Lia e Nina reaproveitam fichas existentes; Mãe, Luana, Tomás e professora Nádia têm retratos próprios com expressões. Consulte `docs/narrativa.md` para acrescentar capítulos.

## Progresso e versões

O progresso usa a chave `cyber:save:v2`, `schemaVersion: 2` e a revisão do roteiro do capítulo. Dados incompatíveis não são apagados silenciosamente: o menu avisa, a chave antiga `cyber:save:v1` é preservada e um registro v2 incompatível recebe cópia em `cyber:save:incompatible-backup` antes de ser substituído. O jogo não possui backend.

## Estado da entrega

Os testes automatizados cobrem persistência, versões incompatíveis, os 36 caminhos de cada um dos dois primeiros capítulos, os 54 caminhos do terceiro, as transições, a retomada de partidas antigas e a presença de retratos e cenários em cada cena. Execute `npm test` e `npm run build` antes de publicar. A interface completa dos capítulos ainda precisa de conferência visual em navegador antes de publicação.

O desenvolvimento foi auxiliado por Codex. O pedido e o uso de IA estão registrados em `../registro-prompts.md`. O documento acadêmico oficial está em `../README.md`, em formato Markdown.
