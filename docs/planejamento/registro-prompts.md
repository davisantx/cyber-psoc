# Registro de prompts

Registro iniciado em 25/10/2026. Cada entrada guarda o texto integral do pedido do usuário e dos prompts enviados a ferramentas de IA neste projeto, com finalidade e resultado. Comandos técnicos de terminal não são prompts de IA.

## 25/10/2026 — Início do registro

**Origem:** usuário
**Prompt integral:**

> ok, eu quero que a partir de agora eu quero que você registre todos os prompts que forem usados, ok?

**Finalidade:** estabelecer o registro de prompts para as próximas etapas do projeto.  
**Resultado:** arquivo de registro criado.

## 25/10/2026 — Implementação do menu principal

**Origem:** usuário  
**Prompt integral:**

> # MISSÃO: IMPLEMENTAR A TELA INICIAL DO JOGO — VISUAL NOVEL CYBER
>
> Você atuará como um desenvolvedor sênior de jogos web, especialista em React, UI/UX, engenharia de software, animações e interfaces de jogos narrativos (Visual Novels).
>
> **Sua missão é implementar a primeira tela jogável do projeto: o MENU PRINCIPAL.**
>
> Não quero apenas um protótipo estático, uma imagem ou sugestões de interface. Quero uma implementação funcional, visualmente refinada e preparada para integrar o restante do jogo futuramente.
>
> ## 1. PRIMEIRO: ANALISE A DOCUMENTAÇÃO
>
> Antes de escrever qualquer código, inspecione cuidadosamente o repositório.
>
> Leia prioritariamente:
>
> - `README.md`
> - `Projeto_Cyber_PSOC_ADS.pdf`
> - `planejamento.md`
> - `sobre-o-jogo.md`
> - `docs/prototipo/ideia-enredo.md`
> - `docs/prototipo/avaliacao-enredo.md`
> - `docs/prototipo/analise-assunto.md`
> - `docs/prototipo/tecnica-sprites.md`
>
> Compreenda o objetivo do projeto, o público-alvo, o estilo do jogo e as tecnologias propostas.
>
> O projeto pertence à iniciativa **Bytes para a Cidadania — Ação de Extensão Cyber**.
>
> O foco é desenvolver um jogo educativo no estilo Visual Novel, abordando:
>
> - Fake news e desinformação.
> - Segurança no ambiente digital.
> - Pensamento crítico.
> - Uso responsável das redes sociais.
> - Tomada de decisões e suas consequências.
>
> O público-alvo principal são estudantes do Ensino Fundamental II.
>
> **Atenção:** os documentos mencionam um protótipo chamado "Operação Camisa 10" e componentes React específicos. Essas referências não comprovam que o código desse protótipo esteja presente no repositório atual.
>
> Verifique primeiro o que realmente existe.
>
> Se encontrar apenas documentação, inicialize uma aplicação web organizada, preservando todos os documentos existentes. Não invente componentes ou funcionalidades que supostamente já estejam implementados.
>
> ## 2. OBJETIVO DESTA ETAPA
>
> Vamos desenvolver exclusivamente a tela de entrada do jogo.
>
> Quero uma tela inicial semelhante às encontradas em visual novels modernas, com aparência de um jogo real.
>
> A tela deve oferecer uma primeira impressão profissional, com uma identidade visual própria, boa organização, animações sutis e navegação intuitiva.
>
> **Não implemente ainda o enredo completo, os sistemas de decisões, os diálogos ou as mecânicas educativas.**
>
> Esses recursos serão desenvolvidos posteriormente.
>
> Nesta etapa, quero uma base sólida, bonita, funcional e extensível.
>
> ## 3. DIREÇÃO ARTÍSTICA
>
> A direção visual deve seguir uma estética:
>
> - Anime contemporâneo.
> - Visual Novel moderna.
> - Cinematográfica, mas discreta.
> - Elegante e imersiva.
> - Levemente misteriosa.
> - Urbana e tecnológica.
> - Apropriada para adolescentes.
> - Coerente com temas de comunicação, redes sociais e desinformação.
>
> O projeto deve parecer um jogo narrativo, não um painel administrativo, uma landing page corporativa ou uma plataforma de cursos.
>
> ### Cores
>
> Utilize uma paleta consistente, preferencialmente:
>
> - Azul profundo.
> - Tons de preto e grafite.
> - Roxo-azulado discreto.
> - Ciano para realces.
> - Branco suave para textos.
>
> Utilize cores de destaque com moderação, mantendo boa legibilidade.
>
> ### Cenário de fundo
>
> A tela deve possuir um fundo visualmente interessante, inspirado em cenários de Visual Novels.
>
> Conceito sugerido:
>
> Uma cidade contemporânea no começo da noite, com prédios, luzes urbanas, atmosfera tranquila e pequenos elementos ligados à vida digital.
>
> O cenário deve transmitir a sensação de que uma história está prestes a começar.
>
> Pode haver elementos secundários, como iluminação de celulares, reflexos e referências sutis a mensagens e notificações.
>
> Evite poluição visual, símbolos tecnológicos excessivos e efeitos futuristas exagerados.
>
> Se não houver imagens adequadas disponíveis, prepare uma composição visual elegante utilizando os recursos existentes, sem depender de serviços externos.
>
> Não utilize imagens de terceiros sem verificar as condições de uso. Não faça chamadas pagas para gerar imagens sem autorização.
>
> O fundo deve ser facilmente substituível por uma ilustração definitiva no futuro.
>
> ## 4. ESTRUTURA DA TELA INICIAL
>
> A tela deverá ocupar toda a área útil da janela do navegador, sem barras de rolagem desnecessárias.
>
> Organize a interface em três áreas principais.
>
> ### 4.1. Área de título
>
> Exiba o título provisório:
>
> **CYBER**
>
> Subtítulo sugerido:
>
> "Toda escolha deixa um rastro."
>
> O título deve possuir uma tipografia marcante e profissional, adequada a um jogo narrativo.
>
> O nome CYBER é provisório. Estruture a implementação para que seja facilmente alterado.
>
> A identificação do projeto acadêmico deve aparecer de maneira discreta, preferencialmente nos créditos, sem competir com o título do jogo.
>
> ### 4.2. Menu principal
>
> Implemente os botões:
>
> **NOVO JOGO**
>
> Inicia uma nova sessão.
>
> Nesta fase, como o enredo ainda não está implementado, faça o botão abrir uma tela temporária de introdução, claramente identificada como conteúdo em desenvolvimento.
>
> Ela deve possuir uma opção funcional para retornar ao menu.
>
> Não implemente histórias inventadas apenas para preencher essa tela.
>
> **CONTINUAR**
>
> Deve futuramente carregar o progresso salvo.
>
> Por enquanto, implemente a estrutura necessária para identificar a existência de uma sessão persistida.
>
> Se não houver progresso válido, o botão deverá aparecer desabilitado de forma compreensível.
>
> Não crie saves fictícios para fazer o botão funcionar.
>
> **CONFIGURAÇÕES**
>
> Abre uma tela ou modal contendo opções iniciais:
>
> - Volume da música, quando existir áudio.
> - Volume de efeitos sonoros, quando existir áudio.
> - Velocidade dos textos para os diálogos futuros.
> - Alternância de animações reduzidas.
> - Opção de tela cheia, respeitando o suporte do navegador.
>
> As preferências deverão ser persistidas localmente.
>
> Não apresente controles de áudio como plenamente funcionais se não houver sistema ou arquivos de áudio disponíveis. Prepare uma implementação coerente com o estado real do projeto.
>
> **CRÉDITOS**
>
> Abre uma interface apresentando:
>
> - Projeto Bytes para a Cidadania.
> - Ação de Extensão Cyber.
> - Instituição e equipe conforme os documentos oficiais disponíveis.
> - Informações gerais sobre o projeto.
>
> Não invente nomes ou atribuições.
>
> Adicione uma opção visível de retornar ao menu principal.
>
> ### 4.3. Rodapé discreto
>
> Adicione uma pequena área com informações como:
>
> - Versão do jogo.
> - Identificação discreta do projeto.
> - Indicador de que o jogo está em desenvolvimento, se necessário.
>
> Não sobrecarregue o rodapé com informações acadêmicas.
>
> ## 5. ANIMAÇÕES E INTERATIVIDADE
>
> Quero uma interface que transmita qualidade e cuidado visual.
>
> Implemente animações sutis como:
>
> - Fade-in inicial.
> - Entrada suave do título.
> - Aparição gradual dos botões.
> - Efeito de destaque ao passar o mouse sobre um botão.
> - Transições suaves entre menu, configurações e créditos.
> - Movimento ambiental discreto no fundo, se apropriado.
>
> As animações devem contribuir para a experiência.
>
> Evite:
>
> - Excesso de partículas.
> - Transições demoradas.
> - Zoom exagerado.
> - Textos piscando.
> - Efeitos que dificultem a leitura.
> - Animações pesadas que prejudiquem computadores escolares.
>
> Respeite a configuração `prefers-reduced-motion`.
>
> ## 6. EXPERIÊNCIA DO USUÁRIO
>
> O menu deve ser utilizável com mouse e teclado.
>
> Requisitos:
>
> - Navegação por Tab e Shift+Tab.
> - Indicadores de foco visíveis.
> - Enter e Espaço para ativar botões.
> - Escape para fechar modais ou retornar ao menu, quando apropriado.
> - Foco corretamente gerenciado ao abrir e fechar modais.
> - Contraste acessível.
> - Botões com áreas de clique confortáveis.
> - Transições previsíveis.
>
> Todos os botões devem realizar ações reais ou possuir estados desabilitados claros.
>
> Não crie botões decorativos que aparentem funcionar.
>
> ## 7. RESPONSIVIDADE
>
> A aplicação será utilizada principalmente em computadores e possivelmente projetada em sala de aula.
>
> Priorize:
>
> 1. Desktop em 1920×1080.
> 2. Notebooks em 1366×768.
> 3. Monitores menores.
> 4. Tablets.
> 5. Smartphones.
>
> A tela deve manter proporções e espaçamentos agradáveis em cada resolução.
>
> Em desktops, utilize uma composição cinematográfica com o título e o menu bem posicionados.
>
> Em dispositivos menores, reorganize os elementos preservando a identidade visual.
>
> Não permita sobreposição de textos, botões fora da tela ou cortes indevidos de elementos importantes.
>
> ## 8. ARQUITETURA E TECNOLOGIAS
>
> A documentação sugere:
>
> - React 19.
> - Vite 6.
> - Tailwind CSS v4.
> - Lucide React.
> - Web Audio API.
>
> Utilize essas tecnologias quando fizerem sentido e forem compatíveis com o ambiente atual.
>
> Primeiramente, verifique se já existe uma aplicação configurada.
>
> Se existir, aproveite a estrutura.
>
> Se não existir, crie uma aplicação React + Vite organizada, preservando a documentação na raiz e utilizando uma pasta apropriada para o código do jogo.
>
> Sugestão de componentes:
>
> - `MainMenu`
> - `MenuButton`
> - `GameTitle`
> - `MenuBackground`
> - `SettingsModal`
> - `CreditsModal`
> - `IntroScreen`
>
> Separe lógica, apresentação, estilos e configurações.
>
> Evite colocar toda a interface em um componente monolítico.
>
> Não crie uma arquitetura excessivamente complexa para uma tela inicial.
>
> O projeto deverá permitir acrescentar posteriormente:
>
> - Sistema de diálogos.
> - Personagens e sprites.
> - Cenários.
> - Escolhas narrativas.
> - Gerenciamento de progresso.
> - Múltiplos finais.
> - Sistema de áudio.
> - Telas educativas e de avaliação.
>
> Não implemente esses sistemas agora.
>
> ## 9. COMPATIBILIDADE OFFLINE
>
> Este jogo poderá ser utilizado em escolas com acesso limitado à internet.
>
> Portanto, a tela inicial deve funcionar após o carregamento dos recursos locais, sem depender de serviços externos.
>
> Evite:
>
> - Fontes carregadas obrigatoriamente por CDN.
> - APIs externas.
> - Bibliotecas de animação desnecessariamente pesadas.
> - Requisições remotas na inicialização.
> - Dependência de autenticação.
> - Serviços pagos.
>
> Uma vez construída, a aplicação deve funcionar localmente com os recursos incluídos no projeto.
>
> ## 10. ORGANIZAÇÃO E DOCUMENTAÇÃO
>
> Mantenha o código compreensível e preparado para manutenção pela equipe.
>
> Documente:
>
> - Como instalar as dependências.
> - Como iniciar o projeto.
> - Como gerar uma versão de produção.
> - Quais componentes foram criados.
> - Como alterar o título do jogo.
> - Como substituir o fundo.
> - Como adicionar música futuramente.
> - Como conectar o botão Novo Jogo ao enredo.
> - Como funciona a persistência das preferências.
> - Quais funcionalidades estão apenas preparadas para implementação futura.
>
> Respeite a proposta de documentação contínua encontrada nos arquivos do projeto.
>
> Registre as decisões técnicas relevantes e o uso de IA de forma compatível com as orientações do repositório.
>
> ## 11. TESTES E VALIDAÇÃO
>
> Após implementar:
>
> 1. Instale as dependências necessárias.
> 2. Execute o projeto.
> 3. Verifique os erros de compilação.
> 4. Execute o build de produção.
> 5. Verifique a navegação entre telas.
> 6. Teste a persistência das configurações.
> 7. Verifique o estado do botão Continuar.
> 8. Teste a navegação por teclado.
> 9. Verifique a responsividade.
> 10. Corrija os problemas encontrados.
>
> Caso tenha acesso a um navegador de testes ou ferramentas de captura, inspecione a interface renderizada.
>
> Não considere o resultado pronto apenas porque o código compilou.
>
> Não afirme que testes visuais foram realizados se não tiver conseguido executá-los.
>
> ## 12. CRITÉRIOS DE ACEITAÇÃO
>
> Considerarei a primeira etapa concluída quando:
>
> - O projeto executar localmente.
> - A tela inicial possuir identidade visual de Visual Novel.
> - O título do jogo estiver bem apresentado.
> - Os quatro botões principais estiverem implementados.
> - Novo Jogo abrir uma tela temporária funcional.
> - Continuar respeitar a existência de progresso salvo.
> - Configurações abrir e funcionar dentro do escopo disponível.
> - Créditos apresentar os dados reais do projeto.
> - O layout funcionar em desktop e dispositivos menores.
> - O build de produção terminar sem erros.
> - A arquitetura permitir implementar o restante do jogo sem reescrever o menu principal.
>
> ## 13. LIMITES DE ESCOPO
>
> Nesta solicitação, NÃO quero que você:
>
> - Crie o enredo inteiro.
> - Implemente capítulos completos.
> - Gere dezenas de sprites.
> - Desenvolva as mecânicas de combate à desinformação.
> - Implemente sistema de pontuação.
> - Crie um backend desnecessário.
> - Instale serviços pagos.
> - Modifique documentos acadêmicos existentes sem necessidade.
>
> Concentre os esforços na tela inicial.
>
> ## 14. INSTRUÇÃO FINAL
>
> Você tem autonomia para tomar decisões de implementação e design dentro dos requisitos.
>
> Não precisa pedir autorização para escolhas comuns de organização, estilização e implementação local.
>
> Porém, solicite autorização antes de executar operações pagas, instalar ferramentas muito pesadas ou realizar alterações destrutivas.
>
> **Não entregue apenas um planejamento. Implemente o código.**
>
> Comece analisando o repositório, identifique sua estrutura real e desenvolva a tela inicial completa.
>
> Ao terminar, apresente:
>
> 1. Resumo do que foi implementado.
> 2. Arquivos criados e modificados.
> 3. Comandos para executar o jogo.
> 4. Resultado dos testes.
> 5. Funcionalidades pendentes.
> 6. Como conectar essa tela ao futuro sistema de narrativa.
>
> **O objetivo desta primeira entrega é que, ao abrir o jogo, o jogador veja uma tela de entrada bonita, envolvente e profissional, semelhante à de uma Visual Novel comercial, mesmo que o restante do jogo ainda esteja em desenvolvimento.**

**Finalidade:** implementar o menu principal do jogo.  
**Uso de IA:** Codex auxiliou na análise do repositório, na implementação e na documentação. Não foram enviados prompts a ferramentas de geração de imagem.  
**Resultado:** aplicação criada em `game/`.

## 25/10/2026 — Redireção visual do menu

**Origem:** usuário  
**Prompt integral:**

> Quero que você REFAÇA a tela inicial do jogo, porque o resultado atual ficou com aparência de site/landing page e com estética muito genérica de IA. Eu quero uma interface com mais identidade própria, mais original e com cara real de UI de jogo, especialmente de visual novel, e menos de página web promocional.
>
> IMPORTANTE: não quero só pequenos ajustes cosméticos. Quero uma revisão real de direção visual, layout e linguagem de interface.
>
> ## OBJETIVO
>
> Transformar a tela inicial atual em uma tela que pareça de fato o MENU DE UM JOGO, e não um site.
>
> A sensação desejada é:
> - menu principal de visual novel
> - interface de jogo narrativa
> - imersiva
> - autoral
> - elegante
> - funcional
> - mais “game UI”
> - menos “landing page moderna feita com Tailwind”
>
> ## PRINCIPAIS PROBLEMAS DO RESULTADO ATUAL
>
> Considere explicitamente que eu NÃO gostei dos seguintes pontos:
>
> 1. Está com cara de site.
> 2. O layout parece uma homepage promocional.
> 3. A tipografia gigante estilo banner reforça a sensação de landing page.
> 4. A composição geral não parece um menu de jogo real.
> 5. O personagem parece mais um elemento decorativo de mockup do que parte de uma cena/interface de jogo.
> 6. A estética geral está “IA demais”, genérica, limpa demais e previsível.
> 7. Está faltando linguagem visual de HUD/UI de jogo.
> 8. Os botões parecem blocos de site, e não opções de menu de uma visual novel.
>
> ## DIREÇÃO CORRETA
>
> Quero que você redesenhe a tela pensando como um diretor de UI de jogo.
>
> A tela deve parecer algo entre:
> - menu inicial de uma visual novel moderna
> - interface narrativa de jogo indie bem acabado
> - menu com atmosfera, ambientação e identidade
>
> ### O que precisa mudar conceitualmente
>
> A interface deve transmitir:
> - menu de jogo
> - atmosfera narrativa
> - sensação de “pressione para começar uma história”
> - composição mais diegética ou semi-diegética
> - menos marketing, mais imersão
>
> ## O QUE EU QUERO VISUALMENTE
>
> ### 1. Layout menos “site”
> Evite:
> - blocos grandes de conteúdo estilo landing page
> - headline gigante ocupando tudo
> - composição típica de hero section
> - menu com aparência de cards corporativos
> - estrutura de página institucional
>
> Prefira:
> - composição de menu central/lateral típica de jogo
> - uma área de foco visual bem definida
> - hierarquia visual de menu real
> - mais respiro dramático
> - menos estrutura “seção web”
>
> ### 2. Interface mais parecida com jogo
> Quero elementos de UI mais autênticos, como:
> - menu com seleção destacada
> - cursor visual ou indicador de opção ativa
> - transições entre opções
> - caixa de interface com acabamento mais estilizado
> - barras, linhas, ornamentos e molduras discretas
> - composição que lembre HUD/menu de jogo, sem exagerar
>
> A interface pode ser minimalista, mas precisa parecer de jogo.
>
> ### 3. Tipografia mais apropriada
> A tipografia atual está com cara de branding de site.
>
> Quero:
> - tipografia forte, mas mais coerente com jogo
> - título menos “anúncio/publicidade”
> - subtítulo elegante
> - textos de menu mais legíveis e com personalidade
> - numeração, ícones ou marcadores que reforcem a sensação de menu
>
> Não quero tipografia genérica de startup.
>
> ### 4. Cenário e ambientação
> O fundo pode continuar com a ideia urbana/noturna, mas quero que ele seja usado como CENÁRIO, e não como wallpaper de site.
>
> Quero que o fundo ajude na imersão, por exemplo:
> - uma sala
> - um quarto
> - uma janela para a cidade
> - ambiente de estudo
> - ambiente com computador/celular/mesa
> - algo que remeta ao universo digital e à narrativa
>
> Pode ser estilizado, mas deve parecer cenário de jogo.
>
> Evite fundo genérico com formas abstratas que pareçam template.
>
> ### 5. Personagem
> Se for manter personagem na tela inicial:
> - ele/ela deve parecer parte do universo do jogo
> - deve estar melhor integrado ao cenário
> - não parecer um recorte jogado na frente da interface
> - pode aparecer em menor destaque, se isso melhorar a composição
> - não precisa dominar a tela
>
> Se a presença do personagem estiver prejudicando a cara de menu, você pode reduzir, reposicionar ou até transformar a presença dele em algo mais sutil.
>
> ### 6. Menu principal
> Quero as opções:
> - Novo Jogo
> - Continuar
> - Configurações
> - Créditos
>
> Mas agora elas devem parecer opções de menu de jogo.
>
> Sugestões:
> - lista vertical mais elegante
> - seleção destacada
> - animação sutil na opção ativa
> - pequenos efeitos sonoros preparados para futuro
> - navegação por teclado funcionando muito bem
> - feedback visual claro ao focar
>
> ### 7. Menos “IA genérica”
> Quero fugir de:
> - composição previsível
> - brilho excessivo
> - visual “clean demais”
> - personagem como mockup decorativo
> - telas que parecem concept page
>
> Quero algo com mais identidade, mais “acabado”, mais pensado como produto jogável.
>
> ## REGRAS DE DESIGN
>
> ### FAÇA
> - pense como UI de jogo
> - pense como menu de visual novel
> - priorize atmosfera e usabilidade
> - trabalhe hierarquia visual de menu real
> - deixe o layout mais original
> - faça a tela parecer um jogo que vai começar
>
> ### NÃO FAÇA
> - não faça landing page
> - não faça homepage de startup
> - não faça hero section de site
> - não faça layout com cara de template de portfólio
> - não faça blocos de conteúdo parecendo cards de site
> - não deixe a tela com aparência excessivamente genérica de IA
>
> ## IMPLEMENTAÇÃO
>
> Quero que você modifique a implementação atual para atingir essa nova direção.
>
> ### Requisitos técnicos
> - manter React + Vite + Tailwind se já estiver no projeto
> - preservar boa organização de componentes
> - manter responsividade
> - manter acessibilidade por teclado
> - manter animações leves
> - manter funcionalidade dos botões
> - continuar permitindo:
>   - Novo Jogo
>   - Continuar
>   - Configurações
>   - Créditos
>
> ### Requisitos de UX
> - foco visível
> - navegação por teclado
> - Enter/Espaço ativando opção
> - Escape fechando overlays
> - estado desabilitado claro para “Continuar”, se não houver save
> - transições suaves, mas discretas
>
> ## ABORDAGEM ESPERADA
>
> Antes de sair codando, quero que você:
>
> 1. analise a tela atual e identifique exatamente por que ela parece um site;
> 2. descreva rapidamente a nova direção visual;
> 3. proponha a reorganização do layout;
> 4. implemente a nova versão;
> 5. teste visualmente o resultado;
> 6. refine se ainda estiver com cara de site.
>
> ## META FINAL
>
> Quando eu abrir a aplicação, eu quero sentir:
>
> “isso parece a tela inicial de um jogo narrativo / visual novel”
>
> e não:
>
> “isso parece um site bonito com arte de IA”.
>
> ## ENTREGA
>
> Ao final:
> 1. explique o que mudou visualmente;
> 2. diga por que agora a tela se aproxima mais de uma UI de jogo;
> 3. liste arquivos alterados;
> 4. diga como executar;
> 5. diga o que ainda pode ser refinado.
>
> Não entregue só um plano. Implemente a nova versão.

**Finalidade:** refazer direção visual, composição e navegação do menu principal.  
**Uso de IA:** Codex alterou os componentes, estilos e cenário SVG localmente; nenhum prompt foi enviado a gerador de imagens.  
**Resultado:** menu redesenhado em `game/`.

## 25/10/2026 — Direção Visual Novel Anime + Atmosfera Cozy Narrative

**Origem:** usuário  
**Prompt integral:**

> # CYBER — REDESIGN DA TELA INICIAL
> ## Direção artística: Visual Novel Anime + Atmosfera Cozy Narrative
>
> Você atuará como um diretor de arte de jogos 2D, designer sênior de Game UI/UX e engenheiro front-end especializado em Visual Novels.
>
> Sua missão é **reconstruir a tela inicial do jogo CYBER**, utilizando como inspiração os princípios de ambientação, iluminação, intimidade narrativa e apresentação de menus encontrados no jogo Coffee Talk, mas desenvolvendo uma identidade visual original para o nosso projeto.
>
> **IMPORTANTE: NÃO QUERO PIXEL ART.**
>
> Os personagens do CYBER utilizam ilustrações em estilo anime contemporâneo. Os cenários e a interface devem harmonizar com esses personagens.
>
> Quero uma tela que pareça pertencer a um jogo indie narrativo profissional, e não a um site, dashboard ou protótipo de navegador.
>
> ---
>
> # 1. CONTEXTO DO PROJETO
>
> O CYBER faz parte da iniciativa acadêmica Bytes para a Cidadania — Ação Cyber.
>
> Trata-se de uma Visual Novel educativa sobre:
>
> - Fake news e desinformação.
> - Redes sociais e comunicação.
> - Cidadania digital.
> - Consequências das decisões.
> - Pensamento crítico.
> - Segurança e responsabilidade online.
>
> Seu público principal são estudantes do Ensino Fundamental II.
>
> O título provisório é:
>
> **CYBER**
>
> Sua frase-tema é:
>
> **Toda escolha deixa um rastro.**
>
> O projeto possui documentos de planejamento, enredo e direção artística. Inspecione o repositório e consulte esses documentos antes de implementar.
>
> Não invente acontecimentos definitivos da história, personagens canônicos ou informações acadêmicas.
>
> ---
>
> # 2. REFERÊNCIA ARTÍSTICA PRINCIPAL
>
> Nossa principal referência de atmosfera é Coffee Talk.
>
> Entretanto, NÃO desejo uma cópia visual de Coffee Talk.
>
> Quero aproveitar os seguintes princípios:
>
> 1. Cenário como principal elemento visual.
> 2. Ambiente confortável, acolhedor e imersivo.
> 3. Iluminação quente contrastando com ambientes externos frios.
> 4. Sensação de estar prestes a entrar em uma história.
> 5. Menu discreto que não compete com a arte.
> 6. Identidade visual consistente.
> 7. Boa utilização do espaço negativo.
> 8. Interface funcional, bonita e sem elementos desnecessários.
>
> O resultado deve ser uma Visual Novel com arte anime ilustrada, não pixel art.
>
> Não reproduza a composição exata de Coffee Talk, seus elementos gráficos proprietários, logotipo, personagens ou cenário.
>
> ---
>
> # 3. CONCEITO ORIGINAL DO CYBER
>
> ## "Entre mensagens e escolhas"
>
> Quero uma atmosfera na qual o mundo digital esteja naturalmente presente no cotidiano dos personagens.
>
> A proposta visual é criar uma sensação de tranquilidade aparente, enquanto pequenos detalhes sugerem que alguma coisa importante está acontecendo.
>
> O jogador deve sentir:
>
> "Existe uma história aqui, e minhas decisões podem mudar o que acontece."
>
> A tela não precisa explicar o enredo.
>
> Ela precisa despertar curiosidade.
>
> ## Sensações desejadas
>
> - Aconchego.
> - Curiosidade.
> - Tranquilidade.
> - Intimidade narrativa.
> - Mistério discreto.
> - Contemporaneidade.
> - Nostalgia suave.
> - Vontade de começar a história.
>
> Evite uma estética agressiva de hacking, cibersegurança corporativa, tecnologia futurista ou ficção científica.
>
> CYBER é uma história sobre pessoas vivendo em um mundo conectado.
>
> ---
>
> # 4. CENÁRIO PRINCIPAL
>
> Quero substituir completamente o cenário atual, construído com formas geométricas e aparência vetorial.
>
> ## Cenário proposto
>
> **Uma pequena cafeteria ou lanchonete urbana brasileira em uma tarde chuvosa, próxima do anoitecer.**
>
> Trate este cenário como uma proposta de ambientação para o menu, não como definição definitiva de um local do enredo.
>
> O ambiente deve possuir:
>
> - Uma janela ampla com gotas de chuva.
> - Iluminação quente vinda das luminárias internas.
> - Luz fria azulada ou violeta do exterior.
> - Mesas e cadeiras com detalhes naturais.
> - Um balcão ou área de convivência.
> - Pequenos objetos cotidianos.
> - Um celular próximo a uma bebida ou caderno.
> - Uma mochila ou materiais escolares discretos.
> - Uma atmosfera de lugar habitado.
> - Profundidade perceptível entre os planos.
>
> A ideia é representar um ambiente cotidiano brasileiro, familiar para adolescentes, com acabamento artístico de Visual Novel.
>
> ## Um detalhe narrativo exclusivo do CYBER
>
> Em algum ponto do cenário, um celular poderá apresentar uma notificação fictícia, por exemplo:
>
> "Você viu essa notícia?"
>
> Essa notificação deve ser um detalhe da composição, não um grande popup.
>
> Ela pode aparecer com uma animação discreta e desaparecer naturalmente.
>
> Isso relaciona o cenário ao tema do jogo sem transformar a tela inicial em uma interface de rede social.
>
> ## Estilo de ilustração
>
> O cenário deverá possuir:
>
> - Arte 2D em estilo anime contemporâneo.
> - Pintura digital refinada.
> - Iluminação ambiental convincente.
> - Texturas discretas.
> - Perspectiva coerente.
> - Sombras macias.
> - Profundidade visual.
> - Detalhamento suficiente para uma cena de jogo.
>
> **Não desenhe o cenário inteiro utilizando apenas divs, retângulos, círculos e gradientes CSS.**
>
> Esse foi um dos principais problemas das versões anteriores.
>
> Se não houver uma arte adequada no repositório, prepare a infraestrutura para receber uma ilustração final e crie um documento de especificação artística.
>
> Utilize assets existentes somente quando adequados e licenciados para uso no projeto.
>
> Não realize geração de imagens por APIs pagas sem autorização.
>
> ---
>
> # 5. PERSONAGENS
>
> O projeto já possui referências de dois personagens em estilo anime:
>
> ## Personagem masculino
>
> - Jovem contemporâneo.
> - Cabelo preto bagunçado.
> - Moletom preto.
> - Calça cargo.
> - Tênis branco com detalhes escuros.
>
> ## Personagem feminino
>
> - Jovem contemporânea.
> - Cabelos castanhos.
> - Estilo urbano casual.
> - Jaqueta verde.
> - Calça cargo escura.
> - Tênis branco com detalhes escuros.
>
> Inspecione os assets disponíveis.
>
> Se estiverem presentes, respeite a identidade visual original.
>
> Não redesenhe os personagens arbitrariamente.
>
> ### Utilização no menu
>
> Não é obrigatório exibir os personagens na tela inicial.
>
> Prefiro um cenário com atmosfera bem construída a personagens posicionados artificialmente.
>
> Se um personagem aparecer, ele precisa estar integrado ao ambiente em escala, perspectiva, iluminação e posicionamento.
>
> Nunca coloque um PNG enorme na frente do cenário apenas para preencher espaço.
>
> ---
>
> # 6. PALETA DE CORES
>
> Quero abandonar a aparência excessivamente escura e azulada da interface anterior.
>
> A paleta deve equilibrar tons quentes e frios.
>
> Sugestão de referência:
>
> | Função | Cor |
> |---|---|
> | Azul noturno | #192734 |
> | Marrom profundo | #392C32 |
> | Creme quente | #F4E5D2 |
> | Âmbar suave | #E9B872 |
> | Lavanda acinzentada | #9B92B5 |
> | Coral discreto | #D9877D |
>
> Essas cores são referências iniciais, não uma obrigação rígida.
>
> Construa a composição considerando as cores da própria ilustração.
>
> A iluminação quente deve criar acolhimento.
>
> Os tons frios devem introduzir uma sensação de mistério.
>
> Evite:
>
> - Azul neon excessivo.
> - Preto puro predominante.
> - Gradientes corporativos.
> - Ciano aplicado em todos os botões.
> - Brilhos exagerados.
> - Excesso de transparências.
>
> ---
>
> # 7. COMPOSIÇÃO DA TELA INICIAL
>
> Este é o ponto mais importante da implementação.
>
> Quero uma tela inicial com composição de jogo, não estrutura de site.
>
> ## Layout principal
>
> Use a arte de fundo ocupando toda a tela, na proporção adequada.
>
> A interface deve ficar visualmente integrada ao cenário.
>
> ### Área do título
>
> Coloque o logotipo CYBER preferencialmente na região superior esquerda ou em uma área visualmente tranquila da composição.
>
> O logotipo deve:
>
> - Ser marcante sem ser gigantesco.
> - Possuir personalidade tipográfica.
> - Ser facilmente legível.
> - Harmonizar com o cenário.
> - Funcionar bem em diferentes resoluções.
>
> Abaixo, exiba discretamente:
>
> "Toda escolha deixa um rastro."
>
> Não utilize uma enorme headline ocupando metade da tela.
>
> ### Área do menu
>
> Posicione o menu em uma região de leitura natural da cena, preferencialmente no terço inferior esquerdo.
>
> As opções devem ser:
>
> - Novo Jogo
> - Continuar
> - Configurações
> - Créditos
>
> O menu deve ser uma lista compacta e elegante.
>
> Não crie cartões grandes.
>
> Não utilize painéis que ocupem metade da tela.
>
> Não divida a interface em duas colunas rígidas.
>
> Não utilize numeração 01, 02, 03 e 04.
>
> Não adicione cabeçalhos técnicos como "ARQUIVO 00" ou "CYBER / MENU".
>
> ## Estilo do menu
>
> Quero uma composição delicada e expressiva.
>
> Exemplo conceitual:
>
> - Texto claro com sombra discreta.
> - Opção selecionada em tom âmbar.
> - Pequeno indicador gráfico personalizado.
> - Deslocamento suave ao mudar a seleção.
> - Destaque tipográfico sutil.
> - Espaçamento consistente.
>
> Se for necessário melhorar a leitura, aplique um gradiente escuro muito suave e localizado atrás da área do menu.
>
> Não crie um bloco opaco grande que esconda o cenário.
>
> ---
>
> # 8. INTERAÇÕES DE JOGO
>
> A interface deve ser totalmente funcional.
>
> ## Novo Jogo
>
> Ao selecionar Novo Jogo:
>
> 1. Execute uma transição suave.
> 2. Reduza gradualmente a visibilidade do menu.
> 3. Apresente uma tela temporária de introdução.
> 4. Ofereça uma opção funcional de retornar.
>
> Não invente capítulos completos.
>
> ## Continuar
>
> Permita continuar somente quando existir progresso válido.
>
> Se não houver progresso:
>
> - Mantenha o item desabilitado.
> - Use uma aparência discreta.
> - Não apresente um botão funcional falso.
>
> ## Configurações
>
> Abra uma interface integrada à identidade visual do jogo.
>
> As configurações devem contemplar, conforme o suporte real do projeto:
>
> - Volume geral.
> - Volume de música.
> - Volume de efeitos.
> - Velocidade dos diálogos.
> - Redução de animações.
> - Tela cheia.
>
> Persista as preferências localmente.
>
> Não apresente controles falsamente funcionais quando o sistema correspondente ainda não existir.
>
> ## Créditos
>
> Apresente os dados reais do projeto, da instituição e dos colaboradores, conforme a documentação.
>
> Evite transformar os créditos em uma página web convencional.
>
> Use um painel integrado à estética do jogo.
>
> ---
>
> # 9. MICROINTERAÇÕES
>
> Quero animações discretas e naturais.
>
> Sugestões:
>
> ### Na abertura
>
> - Fundo aparece suavemente.
> - Iluminação ambiental estabiliza.
> - Logotipo surge com um fade.
> - Menu aparece logo depois.
>
> A entrada deve ser curta e permitir interação rapidamente.
>
> ### Na seleção
>
> - O indicador se move para o item ativo.
> - O texto selecionado recebe um realce sutil.
> - Não há necessidade de efeitos complexos.
>
> ### Na mudança de tela
>
> - Fade curto.
> - Transição consistente.
> - Sem efeitos chamativos.
>
> ### No cenário
>
> Se os assets permitirem:
>
> - Chuva suave na janela.
> - Pequeno movimento ambiental.
> - Variação discreta de iluminação.
>
> Não faça a interface depender de animações para parecer bonita.
>
> A composição estática deve funcionar por si só.
>
> Respeite `prefers-reduced-motion`.
>
> ---
>
> # 10. ÁUDIO E ATMOSFERA
>
> Prepare a arquitetura para utilizar futuramente:
>
> - Música ambiente lo-fi instrumental original ou licenciada.
> - Som suave de chuva.
> - Efeito discreto ao mudar de opção.
> - Som de confirmação.
> - Som de retorno.
>
> Não incorpore músicas de Coffee Talk ou outras obras protegidas sem licença.
>
> Não comece a tocar áudio automaticamente se o navegador não permitir ou antes da interação necessária.
>
> Se não houver arquivos de áudio, deixe os pontos de integração preparados sem criar sons artificiais desnecessários.
>
> ---
>
> # 11. QUALIDADE DA UI/UX
>
> Considere que você está criando uma interface para um jogo que será usado por adolescentes e apresentado em computadores escolares.
>
> Requisitos:
>
> - Navegação intuitiva por mouse.
> - Navegação por teclado.
> - Teclas direcionais para seleção.
> - Enter para confirmar.
> - Escape para voltar.
> - Tab e Shift+Tab funcionando.
> - Indicadores de foco acessíveis.
> - Contraste adequado.
> - Responsividade.
> - Boa performance.
> - Interface funcional sem internet após carregar seus recursos locais.
>
> Priorize especialmente:
>
> - 1920×1080.
> - 1366×768.
> - 1280×720.
>
> Não deve existir rolagem vertical desnecessária na tela inicial em desktop.
>
> ---
>
> # 12. ESTRUTURA TÉCNICA
>
> Inspecione a aplicação existente.
>
> Preserve React, Vite, Tailwind e outras ferramentas já configuradas quando fizer sentido.
>
> Não recomece o projeto do zero desnecessariamente.
>
> Organize:
>
> - Componente de tela inicial.
> - Componente do menu.
> - Sistema de transições.
> - Configurações.
> - Créditos.
> - Gerenciamento de recursos visuais.
> - Preferências locais.
>
> Separe o cenário de fundo dos componentes interativos.
>
> Quero poder substituir a arte do cenário posteriormente sem reescrever a tela inicial.
>
> Centralize os tokens de design, caminhos de assets e configurações relevantes.
>
> Evite dependências pesadas para criar animações simples.
>
> Preserve funcionalidades existentes que estejam corretas.
>
> ---
>
> # 13. ETAPA OBRIGATÓRIA DE DIREÇÃO ARTÍSTICA
>
> Antes de implementar a interface, realize uma breve análise da situação atual.
>
> Observe:
>
> - Layout existente.
> - Componentes.
> - CSS.
> - Assets.
> - Documentação.
> - Comportamentos funcionais.
>
> Em seguida, defina explicitamente:
>
> 1. Como a atmosfera de Coffee Talk será traduzida para arte anime.
> 2. Como a identidade do CYBER será diferenciada.
> 3. Qual será a composição do menu.
> 4. Como os elementos digitais entrarão na ambientação.
> 5. Qual sistema de cores e tipografia será adotado.
>
> Documente essas decisões brevemente e prossiga para a implementação.
>
> Não pare na etapa de planejamento.
>
> ---
>
> # 14. INSPEÇÃO VISUAL OBRIGATÓRIA
>
> Não considere o trabalho concluído apenas porque a aplicação compilou.
>
> Se existirem recursos disponíveis para executar e inspecionar o navegador:
>
> 1. Inicie a aplicação.
> 2. Abra a tela inicial.
> 3. Capture uma imagem em 1920×1080.
> 4. Capture outra em 1366×768.
> 5. Confira o posicionamento dos elementos.
> 6. Verifique legibilidade e contraste.
> 7. Verifique eventuais cortes ou sobreposições.
> 8. Teste as interações.
> 9. Refine os problemas encontrados.
>
> Ao avaliar a imagem, pergunte:
>
> - Parece uma Visual Novel?
> - O cenário tem protagonismo?
> - Existe harmonia entre cenário e menu?
> - A atmosfera é acolhedora?
> - Existe uma identidade própria para o CYBER?
> - A interface parece um jogo ou um site?
> - Algum elemento parece genérico ou deslocado?
> - O resultado seria apresentável como tela de um jogo indie?
>
> Se não houver ferramentas de inspeção visual, informe essa limitação sem declarar uma validação que não aconteceu.
>
> ---
>
> # 15. O QUE NÃO QUERO
>
> Não quero:
>
> - Outra landing page.
> - Menu com aparência de painel administrativo.
> - Pixel art.
> - Cenário genérico de polígonos CSS.
> - Outro quarto vetorial simples.
> - Divisórias gigantes.
> - Tipografia serifada clássica.
> - Excesso de linhas decorativas.
> - Logotipo extremamente grande.
> - Cards translúcidos por toda a tela.
> - Ícones genéricos usados apenas como decoração.
> - Personagens colados artificialmente sobre o fundo.
> - Copiar o menu de Coffee Talk.
> - Interfaces falsas que não respondem às interações.
>
> Também não quero que você interprete "moderno" como sinônimo de efeitos visuais exagerados.
>
> Quero elegância, autenticidade e acabamento artístico.
>
> ---
>
> # 16. CRITÉRIOS DE ACEITAÇÃO
>
> A implementação será considerada satisfatória quando:
>
> 1. A tela inicial possuir uma composição original inspirada nos princípios de atmosfera de Coffee Talk.
> 2. Os personagens e cenários seguirem o estilo ilustrado anime, não pixel art.
> 3. O menu parecer uma interface de Visual Novel.
> 4. A cena possuir iluminação, profundidade e ambientação coerentes.
> 5. O título e os botões forem claramente legíveis.
> 6. Os botões funcionarem corretamente.
> 7. As configurações e os créditos permanecerem acessíveis.
> 8. O layout se adaptar às resoluções solicitadas.
> 9. O build de produção funcionar.
> 10. A interface não depender de imagens remotas ou serviços pagos para executar.
>
> Se não houver um cenário ilustrado adequado, entregue a interface funcional com um recurso temporário claramente identificado e uma especificação detalhada da arte necessária.
>
> Não declare a qualidade artística final como concluída enquanto depender desse recurso.
>
> ---
>
> # 17. INSTRUÇÃO FINAL
>
> Você possui autonomia para redesenhar a interface atual.
>
> Não quero apenas alterações nas cores, nas fontes ou no posicionamento dos mesmos componentes antigos.
>
> **Quero uma nova direção artística implementada de verdade.**
>
> A tela inicial deve apresentar uma atmosfera acolhedora e envolvente, capaz de despertar a curiosidade do jogador.
>
> Use Coffee Talk como referência de sensação e acabamento, não como modelo para copiar.
>
> Mantenha o universo, os personagens, os temas e a identidade do CYBER.
>
> Implemente o máximo possível no repositório atual, execute os testes e apresente os resultados.
>
> Ao final, forneça:
>
> - Resumo da nova identidade visual.
> - Arquivos alterados.
> - Recursos artísticos utilizados.
> - Funcionalidades implementadas.
> - Resultados de testes.
> - Limitações reais.
> - Instruções para executar a aplicação.
>
> **O resultado desejado é uma tela inicial de Visual Novel anime original, com a intimidade narrativa de um jogo aconchegante e uma identidade visual própria do CYBER.**

**Finalidade:** reconstruir a tela inicial com direção aconchegante, menus funcionais e cenário substituível.  
**Uso de IA:** Codex auxiliou na análise, implementação, programação de uma pré-visualização raster local e documentação. Nenhum prompt foi enviado a geradores de imagem.  
**Resultado:** implementação atualizada em `game/`; a arte anime final ainda depende de ilustração própria ou licenciada.

## 25/10/2026 — Substituição da imagem da tela inicial

**Origem:** usuário  
**Prompt integral:** "é porque essa imagem da tela inicial está muito mal feita"  
**Finalidade:** substituir o cenário provisório do menu por uma ilustração com mais qualidade e coerência visual com o projeto.  
**Uso de IA:** imagem gerada pela ferramenta integrada `imagegen` do Codex, sem imagem de referência e sem texto incorporado à arte.  
**Prompt enviado ao gerador:** "Create a polished original contemporary anime background painting in a 16:9 landscape composition for the main menu of CYBER, an educational Brazilian visual novel about digital citizenship and misinformation. A small lived-in Brazilian café/lanchonete on a rainy late afternoon. Warm amber pendant lighting and wood surfaces inside; cool blue-violet rainy city through a broad window. A foreground table at center-right holds a ceramic cup, a study notebook, and a phone with a subtle unread notification glow; no legible words on the phone. Give the leftmost 35% a naturally darker, visually quiet café interior with enough tonal contrast for a large cream title at upper left and four large menu options at lower left, without drawing any UI or leaving it blank. Rich architectural perspective, convincing materials, beautiful painterly linework and nuanced texture, emotional cozy atmosphere, refined professional visual novel key art. No people or characters. No text, logos, trademarks, interface buttons, giant phone, cyberpunk neon, geometric blockout shapes, vector look, watermarks, or copyrighted franchise style mimicry."  
**Resultado:** `game/public/images/cafe-ilustrado.webp` passou a ser o fundo do menu; o blockout anterior foi preservado.

## 25/10/2026 — Redireção da abertura para o contexto escolar

**Origem:** usuário  
**Prompt integral:** "olha, levando em consideração o contexto do projeto social, que estão nos md's e nos pdf's do diretório, a UI/UX da tela inicial continua sendo incongruente com a proposta do nosso projeto"  
**Finalidade:** adequar a tela inicial ao público do Ensino Fundamental II e ao objetivo de investigar desinformação e discutir escolhas na escola.  
**Uso de IA:** Codex reformulou textos, fluxo e documentação; a ferramenta integrada `imagegen` gerou um novo cenário escolar.  
**Prompt enviado ao gerador:** "Create original high-quality contemporary anime visual novel background art, clearly set in a real Brazilian public school classroom after classes, with believable desks, windows, ceiling fans, backpacks, notebooks, a school notice board and a modest smartphone on a student desk. The visual story is a rumor spreading in a school community and the opportunity to investigate before sharing: suggest this through the phone's subtle notification glow and a few ambiguous paper notices; do not depict a literal answer or a fabricated news headline. Mood: curious, humane, energetic and thoughtful, appropriate for a collaborative classroom activity, with late afternoon sunlight, cool blue shadows and restrained warm orange accents. Composition: leftmost 38% naturally dark and low-detail for title and four menu controls overlaid by code; primary desk/phone/notice board in the middle to right; strong perspective, cohesive hand-painted anime linework, textured surfaces, polished illustrated game background. Leave enough visual simplicity behind UI while making the room unmistakably a school. Keep important details visible in a mobile crop. No people or characters, café, coffee cups, cyberpunk hacker visuals, matrix code, shields or padlocks, political imagery, brand marks, logos, readable text, UI controls, watermarks, photorealism, blocky vector shapes, or franchise imitation."  
**Resultado:** `game/public/images/sala-cyber.webp` foi integrado; a abertura ganhou premissa, estado de desenvolvimento e explicação do projeto.

## 25/10/2026 — Abertura genérica sem cenário

**Origem:** usuário  
**Prompt integral:** "olha, eu gostaria que fosse algo mais generico então, já que as imagens que estão sendo postas, elas não fazem muito sentido com o jogo, eu gostaria de algo genérico que não dê a entender nada do jogo mesmo"  
**Finalidade:** retirar imagens e pistas narrativas da tela inicial.  
**Uso de IA:** Codex alterou a interface e a documentação; nenhuma nova imagem foi gerada.  
**Resultado:** o menu usa um fundo abstrato em CSS e mostra apenas CYBER, opções de navegação e estado de desenvolvimento. As imagens anteriores foram arquivadas em `game/docs/visual-history/`.

## 25/10/2026 — Sistema narrativo e primeiro capítulo

**Origem:** usuário  
**Prompt integral:**

> # CYBER — IMPLEMENTAÇÃO DO SISTEMA NARRATIVO E PRIMEIRO CAPÍTULO
>
> Você atuará como um desenvolvedor sênior de jogos narrativos, roteirista de Visual Novels, Game Designer e engenheiro de software especializado em React e TypeScript.
>
> Sua missão é implementar o sistema narrativo do jogo CYBER, seguindo a estrutura de capítulos e o primeiro contexto de história que vou estabelecer.
>
> **IMPORTANTE: a UI/UX da tela inicial está aprovada provisoriamente. Não quero que você modifique seu design neste momento.**
>
> Concentre-se no desenvolvimento do sistema de narrativa, na experiência de diálogo, nas escolhas do jogador e na implementação do primeiro capítulo.
>
> ---
>
> ## 1. CONCEITO PRINCIPAL DO JOGO
>
> O CYBER é uma Visual Novel educativa sobre fake news, desinformação, cidadania digital e consequências das decisões.
>
> O jogo não terá necessariamente um único protagonista acompanhando todos os acontecimentos.
>
> Quero uma estrutura narrativa na qual **cada capítulo apresente a realidade de um personagem diferente**.
>
> A ideia é que o jogador entre no "mundinho" daquele personagem, conheça sua rotina, seus objetivos, suas preocupações e acompanhe como a desinformação afeta sua vida.
>
> Cada capítulo deve funcionar como uma história própria, com começo, desenvolvimento, conflito e conclusão.
>
> Entretanto, todos os capítulos devem pertencer ao mesmo universo narrativo.
>
> ### Estrutura desejada
>
> Capítulo 1: Personagem A e sua experiência com fake news.
>
> Ao terminar sua história:
>
> **"Enquanto isso..."**
>
> Capítulo 2: Personagem B, com outra realidade e outro problema envolvendo desinformação.
>
> Ao terminar:
>
> **"Enquanto isso..."**
>
> Capítulo 3: Personagem C, com sua própria história.
>
> E assim sucessivamente.
>
> O jogo deve transmitir a ideia de que a desinformação não afeta somente uma pessoa ou um grupo específico: ela pode atingir indivíduos diferentes, em situações completamente distintas.
>
> Não quero capítulos completamente desconectados em termos de temática. Eles precisam formar uma experiência narrativa coerente, mesmo com protagonistas diferentes.
>
> Também não quero forçar encontros entre personagens ou conexões artificiais entre as histórias.
>
> ---
>
> ## 2. PRIMEIRO CAPÍTULO — TRÊS ANOS DE PREPARAÇÃO
>
> O primeiro capítulo deverá apresentar a história de um personagem que está se preparando há aproximadamente três anos para um concurso público.
>
> Esse concurso representa uma oportunidade importante de mudar sua vida.
>
> O personagem investiu uma parte considerável de seu tempo estudando, abrindo mão de momentos de lazer, enfrentando dificuldades e mantendo o objetivo de conquistar a aprovação.
>
> Quero que o jogador compreenda o esforço envolvido nessa preparação antes de apresentar o conflito principal.
>
> ### Introdução
>
> Comece mostrando um pouco da rotina do protagonista.
>
> Algumas possibilidades narrativas:
>
> - Estudando durante a noite.
> - Organizando materiais e cronogramas.
> - Revisando conteúdos.
> - Conversando com familiares ou amigos.
> - Demonstrando preocupação com a proximidade da prova.
> - Refletindo sobre os três anos de dedicação.
>
> Não transforme essa introdução em uma explicação longa ou cansativa.
>
> Utilize diálogos naturais, pequenos pensamentos internos e situações cotidianas para desenvolver o personagem.
>
> O objetivo é criar uma conexão emocional com ele.
>
> O jogador precisa entender por que aquele concurso é tão importante.
>
> ---
>
> ## 3. CONFLITO PRINCIPAL — A DESINFORMAÇÃO
>
> À medida que a data da prova se aproxima, o personagem começa a ficar mais nervoso.
>
> Ele acompanha páginas, grupos e perfis relacionados ao concurso para se manter atualizado.
>
> Entretanto, começam a circular informações falsas.
>
> Exemplos:
>
> **Notícia falsa 1 — Mudança da banca**
>
> Uma página não oficial divulga que a banca organizadora do concurso foi alterada repentinamente.
>
> A publicação tenta transmitir credibilidade, mas não apresenta fontes verificáveis.
>
> **Notícia falsa 2 — Alteração do local da prova**
>
> Outra publicação afirma que os locais de aplicação foram modificados poucos dias antes do exame.
>
> O conteúdo utiliza linguagem de urgência e incentiva os candidatos a compartilharem a informação.
>
> **Notícia falsa 3 — Informações contraditórias**
>
> Mensagens em grupos de candidatos apresentam versões diferentes sobre a data, o horário ou a organização da prova.
>
> Não é obrigatório utilizar todas essas notícias. Escolha uma sequência narrativa coerente, evitando repetição desnecessária.
>
> ### Reação do protagonista
>
> O personagem começa a questionar as informações que recebeu.
>
> Ele está nervoso, cansado e preocupado em perder a oportunidade para a qual se preparou durante três anos.
>
> Quero que a narrativa mostre como a desinformação pode explorar sentimentos humanos reais:
>
> - Ansiedade.
> - Medo.
> - Insegurança.
> - Pressa.
> - Expectativa.
> - Confiança em fontes aparentemente conhecidas.
>
> O personagem não deve ser retratado como uma pessoa ingênua ou incapaz.
>
> Ele é alguém que está emocionalmente vulnerável devido à importância daquele momento.
>
> ---
>
> ## 4. DECISÕES DO JOGADOR
>
> Como estamos desenvolvendo uma Visual Novel, o jogador deve participar da história por meio de escolhas.
>
> Essas escolhas precisam alterar determinados acontecimentos.
>
> Exemplo:
>
> O protagonista recebe uma mensagem dizendo que o local da prova mudou.
>
> O jogador poderá decidir entre ações como:
>
> 1. Acreditar imediatamente na publicação.
> 2. Compartilhar a informação com outros candidatos.
> 3. Verificar o comunicado no site oficial da organizadora.
> 4. Procurar confirmação por canais oficiais.
>
> Essas opções são exemplos. Ajuste-as para que as decisões não sejam redundantes.
>
> Quero escolhas que pareçam naturais e façam sentido dentro do contexto.
>
> ### Consequências
>
> As escolhas devem provocar consequências narrativas.
>
> Se o personagem acreditar em uma notícia falsa, poderá:
>
> - Ficar ainda mais nervoso.
> - Alterar desnecessariamente seus preparativos.
> - Espalhar informações incorretas.
> - Prejudicar seu planejamento.
> - Confundir outros candidatos.
>
> Se verificar a informação em fontes oficiais, poderá:
>
> - Identificar a desinformação.
> - Recuperar parte da tranquilidade.
> - Evitar decisões precipitadas.
> - Ajudar outras pessoas a encontrar informações confiáveis.
>
> Não quero que o jogo seja excessivamente moralista.
>
> As consequências devem surgir naturalmente dos acontecimentos.
>
> Evite apresentar mensagens educativas genéricas a cada escolha.
>
> O jogador deve aprender principalmente ao observar o que acontece na história.
>
> ---
>
> ## 5. DESENVOLVIMENTO E CONCLUSÃO DO CAPÍTULO
>
> O primeiro capítulo precisa ter uma estrutura narrativa completa.
>
> ### Ato 1 — A preparação
>
> Apresentar o protagonista, sua rotina e os três anos de dedicação.
>
> ### Ato 2 — A proximidade da prova
>
> Mostrar o nervosismo aumentando conforme o dia do concurso se aproxima.
>
> ### Ato 3 — As notícias falsas
>
> Introduzir as publicações e mensagens contraditórias sobre o concurso.
>
> ### Ato 4 — As decisões
>
> Permitir que o jogador escolha como o protagonista reage às informações.
>
> ### Ato 5 — As consequências
>
> Mostrar os efeitos das decisões e como elas influenciam a preparação e a experiência do personagem.
>
> ### Ato 6 — O encerramento
>
> Concluir o contexto do protagonista de maneira satisfatória.
>
> O encerramento pode variar conforme as escolhas realizadas.
>
> Não é necessário que todas as decisões levem a finais completamente diferentes, mas as escolhas relevantes precisam produzir diferenças perceptíveis.
>
> Evite uma conclusão abrupta.
>
> O capítulo deve proporcionar uma sensação de encerramento antes de apresentar outro personagem.
>
> **Observação:** utilize um concurso, uma banca e canais fictícios. Não invente informações oficiais sobre concursos públicos reais.
>
> Ao abordar a verificação de notícias, respeite a diferença entre páginas de terceiros e comunicados publicados nos canais oficiais competentes.
>
> ---
>
> ## 6. TRANSIÇÃO ENTRE CAPÍTULOS — "ENQUANTO ISSO..."
>
> Este é um dos elementos mais importantes da experiência narrativa.
>
> Quando a história do protagonista chegar ao fim, não quero que o jogador seja simplesmente levado para a tela inicial ou para uma lista de capítulos.
>
> Quero uma transição cinematográfica e natural.
>
> ### Funcionamento desejado
>
> 1. O capítulo termina.
> 2. A última cena desaparece gradualmente.
> 3. A tela escurece.
> 4. Após uma breve pausa, aparece a frase:
>
> **"Enquanto isso..."**
>
> 5. A frase permanece na tela por alguns instantes.
> 6. Uma nova transição apresenta outro cenário, outra realidade e outro protagonista.
> 7. O próximo capítulo começa.
>
> Essa transição deve transmitir a sensação de que, enquanto acompanhávamos a história de uma pessoa, outras situações estavam acontecendo em outros lugares.
>
> ### Direção visual
>
> - Fundo escuro.
> - Tipografia elegante.
> - Frase centralizada.
> - Fade-in e fade-out suaves.
> - Ritmo cinematográfico.
> - Sem efeitos exagerados.
>
> A duração da transição deve ser confortável e não prejudicar o ritmo do jogo.
>
> Respeite as configurações de redução de movimento.
>
> ---
>
> ## 7. ESTRUTURA DOS PRÓXIMOS CAPÍTULOS
>
> Quero que você prepare a arquitetura do jogo para comportar vários capítulos independentes.
>
> Cada capítulo deverá possuir:
>
> - Identificador único.
> - Título.
> - Protagonista.
> - Contexto narrativo.
> - Cenas.
> - Diálogos.
> - Escolhas.
> - Consequências.
> - Condições de encerramento.
> - Referências aos sprites e cenários.
> - Próximo capítulo, quando existir.
>
> ### Importante
>
> **Implemente completamente apenas o primeiro capítulo nesta etapa.**
>
> Não invente o enredo definitivo do segundo, terceiro ou demais capítulos.
>
> Deixe a infraestrutura pronta para acrescentá-los futuramente.
>
> Quando a transição "Enquanto isso..." terminar e não houver outro capítulo implementado, apresente uma tela temporária indicando que a próxima história está em desenvolvimento.
>
> Essa tela deve permitir retornar ao menu principal.
>
> Não faça uma transição infinita ou tente abrir um capítulo inexistente.
>
> ---
>
> ## 8. SISTEMA DE DIÁLOGOS
>
> Implemente um sistema reutilizável de diálogos para a Visual Novel.
>
> Deve suportar:
>
> - Nome do personagem que está falando.
> - Texto do diálogo.
> - Pensamentos internos.
> - Narração.
> - Sprite correspondente.
> - Cenário da cena.
> - Progressão de diálogo.
> - Escolhas interativas.
> - Transições entre cenas.
>
> ### Apresentação visual
>
> Quero uma caixa de diálogo típica de Visual Novel contemporânea.
>
> Ela deve ser:
>
> - Bonita e discreta.
> - Coerente com a identidade do CYBER.
> - Fácil de ler.
> - Responsiva.
> - Integrada ao cenário.
>
> Os diálogos devem aparecer gradualmente, respeitando a velocidade configurada pelo jogador.
>
> O jogador deve conseguir avançar usando mouse ou teclado.
>
> Se o texto ainda estiver sendo revelado, a primeira interação deverá completar a linha atual; a próxima deverá avançar.
>
> Não quero que a interface pareça um chat comum ou formulário web.
>
> ---
>
> ## 9. GERENCIAMENTO DAS ESCOLHAS
>
> Crie um sistema estruturado de decisões narrativas.
>
> As escolhas precisam poder:
>
> - Alterar variáveis da história.
> - Influenciar diálogos posteriores.
> - Ativar ou desativar cenas.
> - Modificar consequências.
> - Determinar determinadas variações do encerramento.
>
> Evite criar um sistema extremamente complicado nesta primeira versão.
>
> Prefira uma solução clara, modular e que possa crescer com os próximos capítulos.
>
> Não utilize apenas botões que levam todos exatamente ao mesmo resultado sem reconhecer a decisão do jogador.
>
> ---
>
> ## 10. PROGRESSO E SALVAMENTO
>
> Prepare ou integre um sistema de progresso local, respeitando o que já existir no projeto.
>
> O sistema deve conseguir armazenar:
>
> - Capítulo atual.
> - Cena atual.
> - Posição do diálogo.
> - Escolhas realizadas.
> - Variáveis narrativas relevantes.
> - Estado necessário para restaurar a experiência.
>
> O botão Continuar do menu principal deverá utilizar esse progresso.
>
> Implemente uma estratégia confiável de versionamento e validação dos dados salvos.
>
> Evite perder progresso silenciosamente quando houver alterações no roteiro.
>
> O jogador deverá conseguir retornar ao menu principal sem causar inconsistências.
>
> ---
>
> ## 11. ORGANIZAÇÃO DO ROTEIRO
>
> Não quero que todos os diálogos e acontecimentos sejam escritos diretamente dentro de componentes React enormes.
>
> Utilize uma estrutura de dados apropriada para representar capítulos e cenas.
>
> Pode ser TypeScript estruturado ou JSON, dependendo das necessidades da arquitetura existente.
>
> A separação deve permitir modificar o roteiro sem precisar reescrever o motor de diálogos.
>
> Exemplo conceitual:
>
> ```text
> src/
> ├── game/
> │   ├── engine/
> │   ├── chapters/
> │   │   └── chapter-01/
> │   │       ├── scenes/
> │   │       ├── characters/
> │   │       └── index.ts
> │   ├── components/
> │   ├── state/
> │   └── types/
> ```
>
> A estrutura é apenas uma sugestão. Adapte-a à organização real do repositório.
>
> Quero uma implementação sustentável para que possamos desenvolver os capítulos seguintes progressivamente.
>
> ---
>
> ## 12. SPRITES E CENÁRIOS
>
> O projeto possui personagens em estilo anime e uma direção artística inspirada na atmosfera acolhedora de Coffee Talk, mantendo identidade própria.
>
> Preserve essa direção artística.
>
> Verifique quais sprites e cenários realmente existem no projeto.
>
> Utilize os recursos disponíveis quando forem adequados.
>
> Se faltar algum cenário ou sprite, não invente que o recurso já existe.
>
> Prepare referências e substitutos temporários claramente identificados, mantendo a possibilidade de integrar as ilustrações definitivas posteriormente.
>
> Não gere imagens pagas sem autorização.
>
> Não altere a UI/UX da tela inicial aprovada provisoriamente.
>
> ---
>
> ## 13. TOM DA NARRATIVA
>
> A história precisa ser humana, envolvente e natural.
>
> Evite:
>
> - Personagens falando como professores.
> - Diálogos excessivamente explicativos.
> - Lições de moral repetitivas.
> - Narradores explicando a consequência de toda escolha.
> - Exageros dramáticos artificiais.
> - Situações pouco plausíveis.
> - Transformar o protagonista em alguém incapaz de raciocinar.
>
> Prefira:
>
> - Conversas cotidianas.
> - Momentos silenciosos.
> - Pensamentos internos.
> - Situações reconhecíveis.
> - Construção gradual de tensão.
> - Consequências plausíveis.
> - Aprendizado contextual.
>
> A primeira história deve fazer o jogador compreender emocionalmente o impacto da desinformação sobre uma pessoa que dedicou três anos a um objetivo importante.
>
> Mantenha linguagem compreensível e adequada ao público adolescente do projeto.
>
> ---
>
> ## 14. PROCESSO DE IMPLEMENTAÇÃO
>
> Execute o trabalho nesta ordem:
>
> ### Etapa 1 — Inspeção
>
> Analise o código atual, os documentos, os assets e as funcionalidades existentes.
>
> Identifique o que pode ser reutilizado.
>
> ### Etapa 2 — Arquitetura
>
> Defina o sistema de capítulos, diálogos, escolhas, cenas e salvamento.
>
> ### Etapa 3 — Primeiro capítulo
>
> Escreva e implemente o roteiro jogável do personagem que está se preparando para o concurso público.
>
> O roteiro deve possuir começo, desenvolvimento, decisões, consequências e encerramento.
>
> ### Etapa 4 — Transição
>
> Implemente a passagem cinematográfica com a mensagem "Enquanto isso...".
>
> ### Etapa 5 — Integração
>
> Conecte o botão Novo Jogo ao primeiro capítulo e o botão Continuar ao sistema de progresso.
>
> ### Etapa 6 — Validação
>
> Execute os testes possíveis, incluindo:
>
> - Navegação pelos diálogos.
> - Escolhas e consequências.
> - Persistência do progresso.
> - Retomada de sessões.
> - Encerramento do primeiro capítulo.
> - Exibição da transição.
> - Comportamento quando não existir capítulo seguinte.
> - Responsividade.
> - Build de produção.
>
> Corrija os problemas encontrados.
>
> ---
>
> ## 15. RESTRIÇÕES IMPORTANTES
>
> Não quero que você:
>
> - Redesenhe o menu principal.
> - Refaça a identidade visual aprovada.
> - Crie todos os capítulos antecipadamente.
> - Invente personagens futuros definitivos.
> - Implemente um backend desnecessário.
> - Adicione sistemas de pontuação complexos.
> - Instale dependências pesadas sem necessidade.
> - Faça chamadas a APIs pagas sem autorização.
> - Entregue apenas um documento explicando como seria o jogo.
>
> Quero a implementação funcional do primeiro capítulo e a preparação do sistema para as próximas histórias.
>
> ---
>
> ## 16. CRITÉRIOS DE ACEITAÇÃO
>
> Considerarei esta etapa concluída quando:
>
> 1. A tela inicial existente permanecer visualmente preservada.
> 2. Novo Jogo iniciar o primeiro capítulo.
> 3. O protagonista tiver seu contexto apresentado.
> 4. A narrativa mostrar seus três anos de preparação.
> 5. As fake news relacionadas ao concurso constituírem o conflito principal.
> 6. O jogador conseguir fazer escolhas.
> 7. As escolhas apresentarem consequências narrativas.
> 8. A história possuir um encerramento coerente.
> 9. A frase "Enquanto isso..." surgir após o encerramento.
> 10. A estrutura permitir adicionar um novo personagem e capítulo futuramente.
> 11. O progresso puder ser salvo e retomado.
> 12. O projeto executar e compilar corretamente.
>
> ---
>
> ## 17. INSTRUÇÃO FINAL
>
> Não quero apenas uma demonstração curta de alguns diálogos.
>
> Quero começar a construir verdadeiramente o CYBER como uma Visual Novel narrativa.
>
> A primeira história deve representar a experiência de alguém que dedicou três anos ao sonho de conquistar uma vaga em um concurso público e que, justamente na reta final, enfrenta o impacto psicológico e prático da desinformação.
>
> A estrutura geral do jogo deverá permitir que, ao terminarmos a história dessa pessoa, a narrativa diga:
>
> **"Enquanto isso..."**
>
> E então possamos conhecer a realidade de outra pessoa, enfrentando outro tipo de fake news.
>
> Cada capítulo será um novo ponto de vista sobre como a desinformação afeta a sociedade.
>
> Implemente o primeiro capítulo, prepare a arquitetura para os próximos e preserve o design atual da tela inicial.
>
> Ao terminar, apresente os arquivos modificados, as funcionalidades implementadas, os testes executados e as limitações restantes.
>
> **Não pare apenas no planejamento. Implemente o sistema e o primeiro capítulo jogável.**

**Finalidade:** implementar uma Visual Novel de capítulos com protagonistas independentes, começando pela história de uma pessoa que estudou três anos para um concurso fictício e enfrenta boatos sobre banca e local de prova.  
**Uso de IA:** Codex auxiliou na arquitetura, no roteiro, na implementação React/JavaScript, nos testes e na documentação. Nenhuma nova imagem foi gerada e nenhuma API paga foi chamada.  
**Resultado:** Capítulo 1 jogável em `game/src/story/`, salvamento local v2, escolhas com consequências, transição “Enquanto isso...” e tela temporária para a próxima história. A tela inicial permaneceu visualmente preservada.

## 26/10/2026 — Continuação do sistema narrativo e Capítulo 2

**Origem:** usuário
**Prompt integral:**

> gostaria de que agora então você fosse ler por completo o capitulo que já existe, você visse a forma como ele está sendo feito no próprio jogo para continuar a escrever o capitulo 2

**Preferência informada durante a execução:** "Telefone sem fio (recomendado)".
**Finalidade:** ler o Capítulo 1 e a implementação narrativa existente para escrever e integrar o Capítulo 2 no mesmo formato, com outro protagonista e o tema "telefone sem fio".
**Uso de IA:** Codex auxiliou na leitura do projeto, criação do roteiro, integração React/JavaScript, testes e documentação. Nenhum prompt foi enviado a geradores de imagem.
**Resultado:** Capítulo 2, "O que chegou ao grupo", implementado em `game/src/story/chapters/chapter02.js`, com Lia como protagonista, quatro decisões e quatro finais; transição a partir do Capítulo 1 e retomada de salvamentos antigos na tela de espera. Onze testes e o build de produção passaram; a abertura e a primeira escolha foram inspecionadas em desktop e celular.

## 26/10/2026 — Cenários ilustrados dos três capítulos

**Origem:** usuário
**Prompt integral:**

> ok, eu gostaria que você lesse todos os capitulos, e levando em consideração os contextos que de cada capitulo, gerasse imagens dos cenários que forem necessárias

**Finalidade:** ler os três capítulos completos, identificar os lugares e momentos visuais necessários e criar cenários coerentes com cada roteiro.
**Uso de IA:** Codex analisou as cenas, gerou doze imagens com o imagegen integrado e editou uma delas para criar a versão diurna do quarto de André. As treze imagens finais foram convertidas para WebP e integradas ao palco narrativo e às transições.
**Resultado:** treze fundos em `game/public/backgrounds/`, associados às cenas dos três capítulos. Dezesseis testes e o build de produção passaram; as aberturas dos três capítulos foram inspecionadas no navegador em resolução de desktop.
