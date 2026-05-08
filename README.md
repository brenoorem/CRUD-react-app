# 📝 Sistema de Notas

Aplicação web completa de gerenciamento de notas desenvolvida com React no frontend e Node.js + Express no backend.

O projeto permite criar, listar, editar e excluir notas utilizando uma API REST integrada.

---

# 🚀 Tecnologias utilizadas

## Frontend

* React
* Vite
* Tailwind CSS
* JavaScript

## Backend

* Node.js
* Express
* CORS
* Body-Parser
* File System (fs)

---

# 📌 Funcionalidades

✅ Listar notas

✅ Criar novas notas

✅ Buscar nota por ID

✅ Editar notas

✅ Excluir notas

✅ Integração completa com API REST

✅ Interface moderna e responsiva

---

# 📁 Estrutura do projeto

```txt
project/
├── backend/
│   ├── server.js
│   ├── data.json
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
```

---

# 🔗 API

Base URL:

```txt
https://projeto-notas-3ycy.onrender.com
```

---

# 📡 Endpoints da API

## Listar notas

```http
GET /api/notes
```

---

## Buscar nota por ID

```http
GET /api/notes/:id
```

---

## Criar nota

```http
POST /api/notes
```

### Body

```json
{
  "titulo": "Minha nota",
  "texto": "Conteúdo da nota"
}
```

---

## Atualizar nota

```http
PUT /api/notes/:id
```

### Body

```json
{
  "titulo": "Novo título",
  "texto": "Novo conteúdo"
}
```

---

## Excluir nota

```http
DELETE /api/notes/:id
```

---

# ▶️ Como executar o projeto

## Backend

### Instalar dependências

```bash
npm install
```

### Executar servidor

```bash
node server.js
```

Servidor disponível em:

```txt
http://localhost:3000
```

---

## Frontend

### Instalar dependências

```bash
npm install
```

### Executar aplicação

```bash
npm run dev
```

Frontend disponível em:

```txt
http://localhost:5173
```

---

# 🎨 Interface

A aplicação possui:

* Layout moderno
* Cards de notas
* Formulário de criação e edição
* Responsividade
* Integração dinâmica com a API

---

# 📚 Conceitos aplicados

* CRUD
* API REST
* Componentização
* Estados com React Hooks
* Requisições HTTP com Fetch API
* Integração Frontend + Backend
* Persistência de dados em JSON
* Controle de CORS

---

# 🌐 Deploy

## Backend

Hospedado no Render.

## Frontend

Pode ser hospedado na Vercel.

---

# 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos e prática de desenvolvimento Full Stack.
