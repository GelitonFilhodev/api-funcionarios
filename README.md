# API Funcionários

API REST simples para gerenciar funcionários (CRUD) construída com Node.js e Express.

## Descrição
Endpoints para listar, criar, atualizar e remover funcionários — projetada como base para estudos ou pequenas aplicações internas.

## Tecnologias
- Node.js
- Express
- (opcional) SQLite / MongoDB / outro DB
- dotenv

## Pré-requisitos
- Node.js >= 16
- npm ou yarn
- (opcional) MongoDB ou outro banco conforme configuração

## Instalação
1. Clone:
   ```bash
   git clone https://github.com/GelitonFilhodev/api-funcionarios.git
   cd api-funcionarios
   ```
2. Instale dependências:
   ```bash
   npm install
   ```
3. Crie um `.env` (exemplo abaixo) e inicie:
   ```bash
   cp .env.example .env
   npm start
   # ou para desenvolvimento
   npm run dev
   ```

## Exemplo de .env
```
PORT=3000
DB_URL=sqlite://./database.sqlite
# ou DB_URL=mongodb://localhost:27017/funcionarios
```

## Endpoints (exemplos)
- GET /employees — lista todos
- GET /employees/:id — obter por id
- POST /employees — criar
  - body exemplo:
    ```json
    {
      "name": "João Silva",
      "email": "joao@exemplo.com",
      "position": "Desenvolvedor"
    }
    ```
- PUT /employees/:id — atualizar
- DELETE /employees/:id — remover

## Estrutura sugerida
- src/
  - routes/
  - controllers/
  - models/
  - services/
- index.js ou app.js
- package.json

## Testes
Se houver configuração:
```bash
npm test
```
