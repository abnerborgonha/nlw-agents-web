# NLW Agents

Este é o projeto **NLW Agents** — uma aplicação web construída com React, Vite e TypeScript, utilizando bibliotecas modernas para UI, roteamento e requisições assíncronas.

## Bibliotecas Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **React DOM**: Renderização do React no navegador.
- **React Router DOM**: Roteamento SPA.
- **@tanstack/react-query**: Gerenciamento de requisições e cache de dados.
- **Tailwind CSS**: Utilitário CSS para estilização rápida e responsiva.
- **tw-animate-css**: Animações utilitárias para Tailwind.
- **@radix-ui/react-slot**: Composição de componentes acessíveis.
- **class-variance-authority** e **clsx**: Utilitários para composição de classes CSS.
- **lucide-react**: Ícones SVG modernos.
- **tailwind-merge**: Mescla de classes Tailwind.

## Como rodar o projeto

1. **Instale as dependências:**

   ```fish
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

2. **Inicie o servidor de desenvolvimento:**

   ```fish
   pnpm dev
   # ou
   npm run dev
   # ou
   yarn dev
   ```

3. **Acesse no navegador:**

   Abra [http://localhost:5173](http://localhost:5173) para ver a aplicação.

## Estrutura do Projeto

- `src/` — Código-fonte principal
  - `components/` — Componentes reutilizáveis
  - `pages/` — Páginas da aplicação (ex: CreateRoom, Room)
  - `lib/` — Utilitários
  - `index.css` — Estilos globais
  - `main.tsx` — Ponto de entrada do React
  - `app.tsx` — Configuração de rotas e providers

## Observações

- O projeto utiliza Tailwind CSS. Certifique-se de que seu editor está com plugins de Tailwind para melhor DX.
- As rotas principais são:
  - `/` — Página de criação/listagem de salas
  - `/room/:roomId` — Página de uma sala específica
- O backend deve estar rodando em `http://localhost:3333` para que as requisições funcionem.

---

Projeto desenvolvido durante o NLW da Rocketseat.
