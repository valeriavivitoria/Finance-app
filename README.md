# Finance App Portfolio

![Finance App Banner](./screenshots/finance-app-banner.png)

## Descrição

Finance App é uma aplicação full stack de gerenciamento financeiro com autenticação JWT, painel analítico e registro de transações em tempo real. Desenvolvido como projeto de portfólio, o sistema entrega uma experiência moderna, minimalista e profissional, ideal para recrutadores e equipes técnicas.

## Principais funcionalidades

- Autenticação segura com JWT
- Cadastro e login de usuários
- Painel com saldo destacado
- Visualização de receitas e despesas
- Criação de transações de receita e despesa
- Exclusão de transações
- Lista de transações com hierarquia visual
- Feedback visual de carregamento e erro
- Layout responsivo e moderno

## Tecnologias utilizadas

- Backend
  - Node.js
  - Express
  - Sequelize
  - SQLite
  - bcrypt
  - jsonwebtoken
  - cors
- Frontend
  - React
  - React Router DOM
  - Vite
  - Axios

## Estrutura do projeto

```text
finance-app/
├─ backend/
│  ├─ controllers/
│  │  ├─ authController.js
│  │  └─ transactionsController.js
│  ├─ database/
│  │  └─ database.js
│  ├─ middlewares/
│  │  └─ authMiddleware.js
│  ├─ models/
│  │  ├─ Transaction.js
│  │  └─ User.js
│  ├─ routes/
│  │  ├─ authRoutes.js
│  │  └─ transactionsRoutes.js
│  ├─ package.json
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ services/
│  │  └─ styles/
│  ├─ package.json
│  └─ vite.config.js
└─ README.md
```

## Screenshots

> As imagens abaixo são placeholders. Substitua por capturas reais para valorizar o portfólio.

- Dashboard

  ![Dashboard Placeholder](./screenshots/dashboard.png)

- Login

  ![Login Placeholder](./screenshots/login.png)

- Registro de transações

  ![Transactions Placeholder](./screenshots/transactions.png)

## Como instalar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/finance-app.git
cd finance-app
```

2. Instale as dependências do backend:

```bash
cd backend
npm install
```

3. Instale as dependências do frontend:

```bash
cd ../frontend
npm install
```

## Como rodar o backend

No diretório `backend`:

```bash
npm start
```

O servidor backend estará disponível em http://localhost:3000 (ou na porta configurada no código).

## Como rodar o frontend

No diretório `frontend`:

```bash
npm run dev
```

O frontend será servido pelo Vite e poderá ser acessado no endereço exibido no terminal (`http://localhost:5173` por padrão).

## Como testar com Insomnia

Use o Insomnia, Postman ou outra ferramenta equivalente para testar as rotas.

### Passos recomendados

1. Copie o endpoint do backend (`http://localhost:3000`).
2. Configure as rotas:
   - `POST /api/auth/register`
   - `POST /api/auth/login`
   - `GET /api/transactions`
   - `GET /api/balance`
   - `POST /api/transactions`
   - `DELETE /api/transactions/:id`
3. Adicione o token JWT retornado em `POST /api/auth/login` como cabeçalho `Authorization: Bearer <token>` para as rotas protegidas.

## Autenticação JWT

O backend utiliza JSON Web Tokens para autenticação.

- O usuário faz login com email e senha.
- O servidor responde com um token JWT.
- O frontend armazena o token no `localStorage` como `finance_token`.
- Todas as rotas de transação são protegidas pelo middleware JWT.

## Exemplos de rotas

### Autenticação

- `POST /api/auth/register`
  - body: `{ "email": "user@example.com", "password": "senha123" }`

- `POST /api/auth/login`
  - body: `{ "email": "user@example.com", "password": "senha123" }`
  - resposta: `{ "token": "..." }`

### Transações

- `GET /api/transactions`
  - cabeçalho: `Authorization: Bearer <token>`

- `GET /api/balance`
  - cabeçalho: `Authorization: Bearer <token>`

- `POST /api/transactions`
  - cabeçalho: `Authorization: Bearer <token>`
  - body: `{ "tipo": "receita", "valor": 150.0, "descricao": "Venda" }`

- `DELETE /api/transactions/:id`
  - cabeçalho: `Authorization: Bearer <token>`

## Organização do projeto

O projeto está dividido em duas camadas principais:

- `backend/` - API REST com autenticação e banco de dados SQLite.
- `frontend/` - aplicação React responsiva e integrada ao backend.

Cada camada mantém a responsabilidade clara entre lógica de negócio, rotas e interface.

## Melhorias futuras

- Implementar busca e filtragem de transações
- Adicionar gráficos e dashboards interativos
- Suporte a categorias personalizadas
- Notificações em tempo real
- Migração para banco de dados relacional em produção
- Inserir testes automatizados de unidade e integração

## Status do projeto

- ✅ Funcional
- 🔧 Integrado com backend e frontend
- 🛡️ Autenticação JWT implementada
- 📱 Design responsivo atualizado
- 🚀 Pronto para demonstração em portfólio

## Contato profissional

- LinkedIn: [https://www.linkedin.com/in/seu-nome](https://www.linkedin.com/in/seu-nome)
- Email: seu.email@dominio.com
- GitHub: [https://github.com/seu-usuario](https://github.com/seu-usuario)

---

> Projeto Finance App criado para demonstrar habilidades em desenvolvimento full stack, UX e integrações seguras.
