## 01 - Busca de uma metodologia coerente para a organização do processo de Software

---
Modelo: Claude Sonnet 5.5
Esforço: Médio
Data: 11/10/2026
---

### 12:23:

**Prompt:**

Com base neste projeto de especificação, em especial considerando a etapa de metodologia apresentada, pense em uma forma de organizar a execução do projeto priorizando a criação de documentação acerca de tudo que está sendo feito, inclusive em relação ao uso da IA, bem como as funções podem ser divididas, e como podemos organizar melhor o tempo/cronograma de tarefas. 

Considere as melhores tecnicas de engenharia de software (pense principalmente no scrum e no kanban).

**Resposta:**

# Plano de organização da execução: *Bytes para a Cidadania*

Propus um **Scrumban**: Scrum para o ritmo (sprints, cerimônias e papéis) e Kanban para o fluxo diário (quadro, limite de trabalho em andamento). Com 6 pessoas, estudantes, 9 semanas e uma dependência externa (a escola), esse híbrido costuma funcionar melhor que o Scrum puro.

## 1. Princípio central: documentar enquanto faz

Adote **docs-as-code**: toda a documentação fica no mesmo repositório do jogo (que, pela proposta, será público), em Markdown, versionada junto ao código.

```
/docs
  /pesquisa        → fichamentos das referências + bancos de fontes
  /game-design     → GDD: narrativa, personagens, cenas, árvore de decisões
  /conteudo        → banco de casos de fake news, cada um com fonte e checagem
  /decisoes        → ADRs (decisões técnicas e pedagógicas, 1 página cada)
  /ia              → registro de uso de IA (ver seção 2)
  /sprints         → planejamento, review e retrospectiva de cada sprint
  /aplicacao       → roteiro da aula, termo de ciência, questionário, resultados
README.md          → visão geral, como rodar, como contribuir, licenças
```

**Definição de Pronto (DoD)**, válida para todo cartão:
1. Entregue e revisado por outra pessoa (nunca só o autor).
2. Documentação atualizada (GDD, ADR ou README, conforme o caso).
3. Se houve IA, o registro foi preenchido.
4. Todo conteúdo factual tem fonte registrada.

Cartão sem documentação não vai para "Concluído". Isso também gera, quase de graça, o material do relatório final.

## 2. Documentação do uso de IA

A proposta prevê IA para desenvolver e codificar o jogo. Em um projeto cujo tema é desinformação, a transparência sobre IA é parte da credibilidade.

**Registro de uso (`/docs/ia/registro.md`)**, uma linha ou bloco por uso relevante:

| Campo | Exemplo |
|---|---|
| Data / quem | 14/10, Pedro R. |
| Ferramenta e modelo | Claude, Copilot etc. |
| Objetivo | Gerar o componente de tela de escolha |
| Prompt (resumo ou link) | "Crie um componente React 19 que…" |
| O que foi aproveitado | Estrutura do componente; descartado o estilo |
| Revisão humana | Revisado por Lucas; corrigido bug de estado |
| Cartão / commit | #23, `a1b2c3d` |

**Regras da equipe:**
- **Commits** com marcação, por exemplo `[IA]` na mensagem ou o trailer `Assisted-by:`, para rastrear o que teve apoio de IA.
- **Conteúdo factual nunca vai direto da IA para o jogo.** Os casos de fake news são checados em fonte primária e a fonte vai no banco de conteúdo. A IA pode sugerir ideias de cenários, mas quem valida é uma pessoa.
- **Código gerado por IA** passa por revisão e deve ser entendido por quem o integra. Se ninguém consegue explicá-lo, não entra.
- **Dados pessoais** (nomes, respostas de alunos) nunca vão em prompts.
- **Licenças** dos recursos de terceiros (DiceBear, ícones, sons) são registradas no README.
- Uma seção "Uso de IA" no relatório final, gerada a partir desse registro.

## 3. Papéis (6 pessoas)

Em Scrum clássico há três papéis. Com 6 pessoas, sugiro que cada uma acumule **um papel de responsabilidade e um de apoio**, e que todos programem, pesquisem ou testem em alguma medida:

| Papel | Responsabilidade | Observação |
|---|---|---|
| **Product Owner** | Prioriza o backlog, é o contato com o professor e a escola, decide o escopo | Fixo |
| **Scrum Master / facilitador** | Conduz cerimônias, remove bloqueios, cuida do quadro | **Rotativo por sprint** |
| **Líder técnico** | Arquitetura, padrões de código, revisão de PRs, setup do repositório | Fixo |
| **Líder de conteúdo e pedagogia** | Banco de casos, linguagem para o Fundamental II, validação das fontes | Fixo |
| **Líder de documentação e IA** | Mantém `/docs`, o registro de IA, ADRs e o esqueleto do relatório | Fixo |
| **Líder de aplicação e avaliação** | Logística com a escola (data, projetor), roteiro da aula, questionário, análise | Fixo |

Distribua os papéis entre as 6 pessoas conforme perfil. Sugestão de apoio cruzado: o líder técnico e mais uma pessoa formam a dupla de desenvolvimento; conteúdo e documentação revisam um ao outro, pois conteúdo e fonte caminham juntos.

## 4. Quadro Kanban

Use **GitHub Projects** (ou Trello), ligado ao repositório.

**Colunas:** `Backlog` → `Pronto para sprint` → `Em andamento` → `Em revisão` → `Em teste` → `Concluído`

- **Limite de WIP:** no máximo 2 cartões por pessoa em andamento e 6 em revisão no total. Isso evita muita coisa começada e nada terminada.
- **Raias por tema:** Pesquisa · Conteúdo · Desenvolvimento · Documentação · Aplicação.
- **Etiquetas:** `IA-assistido`, `bloqueado`, `risco`, `depende da escola`.
- **Definição de Preparado:** o cartão só entra na sprint se tiver critério de aceite claro e estimativa pequena (quebre o que passar de ~1 dia de trabalho).
- Cada cartão aponta para o objetivo específico (a–f) que atende. Assim o backlog fica rastreável até a proposta.

## 5. Cerimônias leves (compatíveis com a rotina de estudantes)

| Cerimônia | Frequência | Duração | Formato |
|---|---|---|---|
| Planejamento da sprint | Início de cada sprint | 45 min | Presencial ou online |
| Daily **assíncrona** | Dias úteis | 2 min | Mensagem no grupo: fiz / farei / bloqueio |
| Encontro semanal de sincronização | 1×/semana | 30 min | Revisar quadro e bloqueios |
| Review | Fim da sprint | 30 min | Demonstrar o que está pronto (idealmente ao professor) |
| Retrospectiva | Fim da sprint | 30 min | O que manter, parar e melhorar; vira ação no quadro |

## 6. Cronograma proposto (9 semanas, 4 sprints)

Reorganizei as 5 etapas da metodologia em sprints com meta clara. Não consegui ver na tabela do PDF em quais semanas cada "x" está, então ajuste este desenho ao calendário real, mapeando as semanas 1 a 9 para datas.

| Sprint | Semanas | Meta (resultado verificável) | Etapas |
|---|---|---|---|
| **Sprint 0** | 1 | Repositório, quadro, papéis, DoD, modelos de documentos e **data da aplicação na escola confirmada** | Etapa 1 (início) |
| **Sprint 1** | 2–3 | Pesquisa fichada, conteúdo selecionado, narrativa e árvore de decisões em papel, protótipo clicável básico | Etapas 1–3 |
| **Sprint 2** | 4–5 | Jogo jogável do início ao fim (versão completa de uma narrativa), banco de casos validado | Etapa 3 |
| **Sprint 3** | 6–7 | Polimento, teste interno e piloto com alguém do público (ou colegas), roteiro da aula e questionário prontos, kit de aplicação testado (projetor, internet, plano B offline) | Etapas 3–4 |
| **Sprint 4** | 8–9 | Aplicação na escola, coleta e análise do feedback, publicação (domínio e repositório público), divulgação, relatório final | Etapas 4–5 |

**Pontos de atenção:**
- A **data na escola** é a maior dependência externa e deve ser tratada na Sprint 0, não depois. Se a escola mudar a data, todo o resto se desloca.
- Reserve **~20% de folga** em cada sprint para imprevistos (provas, feriados).
- Há **congelamento de escopo** no fim da Sprint 3: depois dele, só correções.
- Planeje um **plano B offline** (jogo rodando local, ou versão impressa das decisões) caso falte internet na escola.

## 7. Backlog inicial por épico

1. **Pesquisa e fundamentação** (objetivo a): fichamento das referências, glossário (misinformation, malinformation, disinformation).
2. **Conteúdo e narrativa** (b, e): banco de casos com fonte, personagens, cenas, consequências de cada escolha, mensagem pedagógica de cada final.
3. **Desenvolvimento** (c): estrutura React/Vite, motor de cenas e escolhas, estética RPG, áudio, acessibilidade básica, deploy.
4. **Aplicação** (d, e): roteiro minuto a minuto da hora de atividade, perguntas de discussão, logística.
5. **Avaliação** (f): questionário (impresso e digital), consolidação dos resultados.
6. **Documentação e divulgação:** README, relatório final, publicação no Instagram.

## 8. Riscos principais

| Risco | Resposta |
|---|---|
| Escola cancela ou adia | Contato na Sprint 0, segunda escola ou turma como reserva |
| Conteúdo da IA com informação errada | Regra de fonte obrigatória + revisão cruzada |
| Gargalo de uma pessoa só no código | Revisão de PR em dupla, DoD exige que alguém consiga explicar o código |
| Jogo mal adaptado à faixa etária | Piloto com alguém do público na Sprint 3 |
| Falha técnica na aplicação | Plano B offline, teste de equipamento antes |
| Coleta de dados dos alunos (menores) | Questionário sem nome/identificação, ciência da escola. Vale alinhar com o professor como tratar isso em relação à LGPD |

Se quiser, o próximo passo natural é eu montar os **modelos prontos** (registro de IA, ADR, template de cartão com DoD, ata de sprint e roteiro da aplicação) em arquivos Markdown, para vocês colocarem direto na pasta `/docs`. Se preferir, posso também ajustar o cronograma às datas reais da disciplina.


### 12:37

**Prompt:**

O problema é que os membros da equipe nunca estiveram inseridos em um contexto de aplicação de metodologias de engenharia de software e apenas 3 pessoas da equipe programarão de fato. 

Fora que o tempo que os membros tem disponiveis ao projeto ao longo da semana é baixo.

O que pode ser adaptado? Como isso tudo pode ser simplificado?

**Resposta:**

# Versão simplificada: o mínimo que funciona

O plano anterior era completo demais para o contexto de vocês. A ideia agora é cortar o que exige disciplina de quem já trabalha com isso e manter só o que protege o projeto. Se eu tivesse que resumir: **um quadro, um combinado de pronto, um registro de IA e uma reunião semanal.**

## 1. O que cortar

| Tirar | Por quê |
|---|---|
| Sprints formais, Sprint 0, planejamento e review separados | Exigem prática. Substitua por **metas semanais** |
| Daily (mesmo assíncrona) | Com pouco tempo disponível, vira cobrança e ninguém responde |
| Scrum Master rotativo, Product Owner, líder técnico etc. | Papéis demais para 6 pessoas inexperientes |
| ADRs, GDD completo, pasta `/docs` com 7 subpastas | Muito para manter |
| Limites de WIP por pessoa, raias, várias etiquetas | Complexidade sem retorno |
| Commits com trailers, revisão de PR para tudo | Só 3 programam, então a revisão vira gargalo |

## 2. O que manter (o núcleo)

### a) Um quadro Kanban com 4 colunas
`A fazer` → `Fazendo` → `Revisar` → `Pronto`

Use Trello ou GitHub Projects, o que for mais familiar. Regra única: **cada pessoa tem no máximo 1 ou 2 cartões em "Fazendo"**. Cartão pequeno, que caiba em poucas horas. Se não cabe, quebre.

### b) "Pronto" com apenas 3 perguntas
Um cartão só vai para `Pronto` se:
1. Outra pessoa olhou.
2. Se tem informação factual (um caso de fake news, por exemplo), a **fonte está anotada**.
3. Se a IA foi usada, está **registrada**.

### c) Registro de IA em uma única planilha
Em vez de um diretório de documentos, uma planilha compartilhada (Google Sheets) com 5 colunas:

| Data | Quem | Para quê usou a IA | O que aproveitou / mudou | Quem conferiu |
|---|---|---|---|---|

Preencher leva 1 minuto. No relatório final, vira a seção "Uso de IA". Não precisa guardar prompts completos, só o resumo.

Duas regras que bastam: **conteúdo factual nunca vai da IA direto para o jogo** (alguém confere na fonte) e **nunca colocar dados pessoais de alunos em prompts**.

### d) Uma reunião semanal de 30 minutos
Mesmo horário toda semana, presencial ou chamada. Pauta fixa de 3 perguntas:
1. O que ficou pronto?
2. O que está travado?
3. Qual a meta da próxima semana (2 ou 3 cartões por pessoa, no máximo)?

Quem anota a ata muda a cada semana, e ela pode ser só uma nota curta no próprio grupo ou no quadro. É isso que gera a documentação do processo sem esforço extra.

## 3. Divisão de funções com 3 programadores e 3 não programadores

O desbalanceamento não é um problema se o trabalho não programável for **tratado como trabalho de verdade**. Num jogo educativo, o conteúdo é metade do produto.

| Grupo | Pessoas | Responsabilidade |
|---|---|---|
| **Desenvolvimento** | 3 | Código, estética RPG, áudio, deploy. Um deles (o mais experiente) decide as questões técnicas |
| **Conteúdo e pesquisa** | 2 | Casos de fake news com fonte, narrativa, personagens, escolhas e consequências, linguagem para o Fundamental II |
| **Aplicação, avaliação e documentação** | 1 (apoiada pelo grupo de conteúdo) | Contato com a escola, roteiro da aula, questionário, planilha de IA, atas, relatório |

Dois combinados que ajudam muito:
- **Quem escreve o conteúdo entrega em formato que o programador consiga usar direto**, por exemplo um documento ou planilha com colunas: *cena, texto, opções, consequência de cada opção, mensagem de ensino, fonte*. Os programadores só transformam isso em código, sem inventar história.
- **Os não programadores também testam o jogo**. Eles são os melhores testadores, já que se aproximam do jogador comum.

Uma pessoa precisa também ser o **ponto de contato** com o professor e a escola, para não haver três pessoas falando com a escola ao mesmo tempo.

## 4. Documentação reduzida: só 5 itens

1. **README do repositório** (o que é, como rodar, tecnologias, licenças dos recursos de terceiros).
2. **Planilha de conteúdo** (casos, textos, escolhas, fontes). Já é o roteiro do jogo.
3. **Planilha de registro de IA**.
4. **Atas semanais** (curtas).
5. **Roteiro da aplicação + questionário.**

Todo o resto (relatório final, resultados) sai desses cinco.

## 5. Cronograma enxuto: 9 semanas, 4 fases com meta

Sem sprint, só fases com uma entrega verificável. Como o tempo de vocês é curto, cada pessoa deve ter **poucas horas por semana comprometidas**. Vale combinar um número realista (por exemplo, 3 a 4 horas) e dimensionar o escopo a partir dele.

| Semanas | Meta | Principais tarefas |
|---|---|---|
| **1** | Organização e escola | Montar quadro, planilhas e repositório; **combinar com a escola a data da aplicação**; definir quem faz o quê |
| **2–4** | Conteúdo e base do jogo | Conteúdo: pesquisa, casos com fonte, narrativa e escolhas. Dev: estrutura do jogo e motor de cenas já funcionando com cenas de teste |
| **5–7** | Jogo completo | Conteúdo entra no jogo, estética e áudio, testes internos, roteiro da aula e questionário prontos |
| **8–9** | Aplicação e fechamento | Teste final do equipamento, aplicação, análise do questionário, publicação e relatório |

**Escopo mínimo viável:** é melhor um jogo curto e bem acabado que cubra 3 ou 4 situações de fake news do que um longo que não fica pronto. A atividade tem só uma hora, então a narrativa de ~25 a 30 minutos de jogo mais discussão já basta. Se sobrar tempo, adicione cenas, e não o contrário.

**Congelamento:** uma semana antes da aplicação, só correção de erros, sem funcionalidades novas.

## 6. Uso prático da IA sem criar burocracia

Como a IA vai ajudar bastante a programar, e só 3 pessoas codificam, ela pode compensar parte da falta de tempo. Para que isso não vire risco:
- Quem usa a IA para código **precisa conseguir explicar o que o trecho faz** antes de aceitar. Se não entender, pede à própria IA que explique, ou descarta.
- Fazer **commits pequenos e frequentes** no repositório. É a melhor "documentação" do que a IA gerou e também permite desfazer quando algo quebra.
- Os não programadores podem usar a IA para **rascunhar ideias de cenários e linguagem jovem**, desde que os fatos sejam conferidos antes (regra do item 2c).

## 7. Primeira semana: checklist

- [ ] Criar o quadro com as 4 colunas
- [ ] Criar o repositório e a planilha de conteúdo e a de IA
- [ ] Combinar o dia e horário fixos da reunião semanal
- [ ] Combinar quantas horas por semana cada um consegue dar
- [ ] Definir quem é o contato com a escola e **confirmar a data**
- [ ] Dividir os três grupos (desenvolvimento, conteúdo, aplicação/documentação)
- [ ] Escolher a ordem de rodízio de quem faz a ata

Se quiser, posso montar agora os **modelos prontos**: a planilha de registro de IA, o formato da planilha de conteúdo para os programadores, o modelo de ata e um README inicial. Também posso distribuir as tarefas das 9 semanas em cartões para já colar no quadro, se vocês me disserem as datas reais e quantas horas por semana cada um tem.