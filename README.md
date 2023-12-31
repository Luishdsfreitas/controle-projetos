# controle-projetos

# Descrição
Aplicação que permite empresa manter o controle de projetos

# Funcionalidades

## Cadastro de projeto
 - Título
 - Descricao
 - Previsão data inicial
 - Previsão data final
 - Previsão orçamento R$
 - Número de pessoas no projeto

## Listagem de projetos
- Retornar os projetos cadastrados

## Edição de projetos
- Permitir editar dados de um projeto cadastrado

  ## Exclusão de projetos
- Permitir excluir um projeto cadastrado

  ## Endereço de Deploy - GitHub Pages
- https://luishdsfreitas.github.io/controle-projetos/

  ## Protótipo
- https://www.figma.com/file/wbtTZvw2HZI9D8y6zwnb7z/controle-projetos?type=design&node-id=8%3A34&mode=design&t=HE59vuNnCTtSTfEx-1

  ## Manual de execução
- Clonar o repositório com git clone
- Fazer checkout no branch main que está em produção
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto
- Instalar as dependências contidas no package.json
- Comando: npm i
- Instalar o JSON Server globalmente disponível em https://www.npmjs.com/package/json-server
- Comando: npm i -g json-server
- Executar a API Fake (JSON Server) via um dos seguintes comandos:
- Execução via script registrado no package.json: npm run json:server:routes
- Ou via Execução explícita: json-server --watch db.json --routes routes.json --port 3000
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo db.json e routes.json.
- Por padrão, a aplicação JSON Server executa no endereço localhost:3000
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
- Comando: ng s -o

## Tópicos/Checklist
- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro).
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes. 
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade usando uma API (JSON Server).
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.
