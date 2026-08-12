# API Funcionários
 
API REST para gerenciar funcionários (CRUD básico) construída com Node.js, Express e Sequelize.
 
## Visão geral
 
Este serviço expõe endpoints para listagem e cadastro de funcionários. Ao cadastrar um funcionário, o serviço também notifica o microsserviço de benefícios (integração via HTTP com `axios`).
 
**Arquitetura:** MVC (models, controllers, routes), com integração assíncrona a um microsserviço externo de benefícios via HTTP.
 
Observações do código:
 
- Endpoints definidos em `src/routes/funcionarioRouter.js`: `GET /funcionarios` e `POST /funcionarios`.
- Modelo Sequelize: `src/models/funcionario.js` com campos:
  - `id` (integer, autoincrement)
  - `nome` (string, obrigatório)
  - `cargo` (string, obrigatório)
  - `salario` (decimal, obrigatório)
- Integração: ao cadastrar (`cadastrar`), é feito um `POST` para `${process.env.API_BENEFICIOS}/beneficios` com `{ funcionarioId, salario, cargo }`.
- O servidor inicializa em `src/server.js` e chama `sequelize.sync()` (cria/atualiza tabelas automaticamente).
- Migrations (Sequelize CLI) versionam o schema: criação da tabela `Funcionarios` e adição posterior da coluna `salario`.
- Scripts (`package.json`):
  - `start`: `nodemon src/server.js`
  - `test`: `jest`
## Requisitos
 
- Node.js >= 16
- Banco MySQL (configurado via Sequelize) — ou adaptação para outro dialect suportado
- Variáveis de ambiente (exemplo):
  - `DB_NAME`
  - `DB_USER`
  - `DB_PASSWORD`
  - `DB_HOST`
  - `API_BENEFICIOS` (URL do microsserviço de benefícios)
  - (opcional) `NODE_ENV`
## Como executar (local)
 
1. Clone o repositório:
```bash
   git clone https://github.com/GelitonFilhodev/api-funcionarios.git
   cd api-funcionarios
```
2. Instale as dependências:
```bash
   npm install
```
3. Crie um arquivo `.env` na raiz com as variáveis acima (exemplo abaixo).
4. Rode as migrations para criar as tabelas:
```bash
   npx sequelize-cli db:migrate
```
5. Inicie o servidor:
```bash
   npm start
```
   (o código usa `nodemon`, então reinícios são automáticos em dev)
 
### Exemplo de `.env`
 
```env
DB_NAME=funcionarios_db
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost
API_BENEFICIOS=http://localhost:3001
NODE_ENV=development
```
 
> ⚠️ Não commite credenciais reais. O `config/config.json` do Sequelize CLI também deve ler de variáveis de ambiente (ou seja adicionado ao `.gitignore` se contiver segredos).
 
## Endpoints
 
### `GET /funcionarios`
 
Lista todos os funcionários cadastrados.
 
**Resposta (200):**
```json
[
  {
    "id": 1,
    "nome": "Maria Silva",
    "cargo": "Analista",
    "salario": "3500.00",
    "createdAt": "2026-08-11T12:00:00.000Z",
    "updatedAt": "2026-08-11T12:00:00.000Z"
  }
]
```
 
### `POST /funcionarios`
 
Cadastra um novo funcionário e notifica o microsserviço de benefícios.
 
**Corpo da requisição:**
```json
{
  "nome": "Maria Silva",
  "cargo": "Analista",
  "salario": 3500.00
}
```
 
**Resposta (201):** o funcionário criado.
**Resposta (500):** erro de servidor (ex.: falha na criação ou na notificação ao serviço de benefícios).
 
## Testes
 
```bash
npm test
```
 
## Estrutura do projeto
 
```
src/
├── config/
│   └── database.js
├── controllers/
│   └── funcionarioController.js
├── migrations/
│   ├── 20260708195732-criar-funcionarios.js
│   └── 20260713194620-adicionar-salario-funcionarios.js
├── models/
│   ├── index.js
│   └── funcionario.js
├── routes/
│   └── funcionarioRouter.js
├── app.js
└── server.js
```
 
## Melhorias futuras
 
- Endpoints de atualização (`PUT`) e remoção (`DELETE`) de funcionários
- Validação de payload (ex.: `express-validator` ou `joi`)
- Tratamento de erro mais granular na integração com o serviço de benefícios (retry/circuit breaker)
 
