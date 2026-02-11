# 🚀 DNCommerce API

Desafio: Integração e modelagem de dados de um produto digital

## 📌 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Produtos e Estoque)
- MySQL (Clientes, Pedidos e Vendas)
- Sequelize
- Mongoose
- Insomnia (testes)

---

## 🗄️ Modelagem de Dados

### 📦 Produto (MongoDB)

- _id
- nome
- descricao
- preco
- categoria
- criadoEm

### 📊 Estoque (MongoDB)

- produtoId
- quantidade
- atualizadoEm

---

### 👤 Cliente (MySQL)

- id
- nome
- email
- telefone
- criado_em

### 🧾 Pedido (MySQL)

- id
- cliente_id (FK)
- data
- status

### 💰 Venda (MySQL)

- id
- pedido_id (FK)
- valor_total
- forma_pagamento

---

## 🔗 Relacionamentos

- Cliente 1:N Pedido
- Pedido 1:1 Venda
- Pedido N:N Produto (pedido_produtos)