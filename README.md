# API Funcionários

API REST para gerenciar funcionários (CRUD básico) construída com Node.js, Express e Sequelize.

## Visão geral
Este serviço expõe endpoints para listagem e cadastro de funcionários. Ao cadastrar um funcionário, o serviço também notifica o microserviço de benefícios (integração via HTTP).

Observações do código:
- Endpoints definidos em `src/routes/funcionarioRouter.js`: GET /funcionarios e POST /funcionarios.
- Modelo Sequelize: `src/models/funcionario.js` com campos:
  - id (integer, autoincrement)
  - nome (string, obrigatório)
  - cargo (string, obrigatório)
  - salario (decimal, obrigatório)
- Integração: ao cadastrar (`cadastrar`), é feito um POST para `${process.env.API_BENEFICIOS}/beneficios` com { funcionarioId, salario, cargo }.
- O servidor inicializa em `src/server.js` e chama `sequelize.sync()` (cria/atualiza tabelas automaticamente).
- Scripts (package.json):
  - start: `nodemon src/server.js`
  - test: `jest`

## Requisitos
- Node.js >= 16
- Banco MySQL (configurado via Sequelize) — ou adaptação para outro dialect suportado
- Variáveis de ambiente (exemplo):
  - DB_NAME
  - DB_USER
  - DB_PASSWORD
  - DB_HOST
  - API_BENEFICIOS (URL do microserviço de benefícios)
  - (opcional) NODE_ENV

## Como executar (local)
1. Clone:
   git clone https://github.com/GelitonFilhodev/api-funcionarios.git
   cd api-funcionarios
2. Instale dependências:
   npm install
3. Crie um `.env` com as variáveis acima (exemplo abaixo).
4. Inicie:
   npm start
   (o código usa `nodemon` então reinícios são automáticos em dev)

Exemplo de `.env`:
