# 📌 API Documentation - Dev Stage Web

## 🚀 Sobre a API

Esta API foi desenvolvida para fornecer suporte ao sistema de gerenciamento de eventos do **Dev Stage Web**. A API permite a criação e indicação de eventos, além de funcionalidades de gerenciamento de inscrições.

## 🛠 Tecnologias Utilizadas

A API foi desenvolvida utilizando as seguintes tecnologias:

- **Fastify**: Framework rápido e eficiente para Node.js.
- **Drizzle ORM**: ORM leve e eficiente para PostgreSQL.
- **Zod**: Validação e tipagem de dados.
- **PostgreSQL**: Banco de dados relacional.
- **Swagger**: Documentação da API.

## 📌 Endpoints

### 🔗 Acessar Link de Convite
**Rota:** `GET /invites/:subscribedId`

**Descrição:** Acessa o link de convite e redireciona o usuário.

**Parâmetros:**
```json
{
  "subscribedId": "string"
}
```

**Resposta:**
- **302 Redirect** para a URL configurada no ambiente.

### 📊 Obter Ranking
**Rota:** `GET /ranking`

**Descrição:** Retorna o ranking de usuários.

**Resposta:**
```json
{
  "ranking": [
    {
      "id": "string",
      "name": "string",
      "score": "number"
    }
  ]
}
```

## 📄 Modelos de Dados

### 📌 Tabela `subscriptions`

```typescript
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
```

## 📄 Documentação da API

A documentação da API pode ser acessada em: [http://localhost:3333/docs](http://localhost:3333/docs)

## 📥 Clonando e Rodando o Projeto

A API utilizada no projeto pode ser acessada aqui: [**devStage**](https://github.com/marlisonmourao/nlw-connect.git).

```bash
# Clone o repositório
$ git clone https://github.com/marlisonmourao/nlw-connect.git

# Acesse a pasta do projeto
$ cd nlw-connect

# Instale as dependências
$ npm install # ou npm i
# Ou, se estiver utilizando pnpm:
$ pnpm install # ou pnpm i

# Inicie o servidor
$ npm run dev
```

Agora a API está pronta para uso! 🚀

---

Feito com 💜 por [Marlison Mourão](https://github.com/marlisonmourao)

