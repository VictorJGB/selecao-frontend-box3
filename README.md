# Guardia Maria - Seleção Front-End Box3

Esse projeto é uma aplicação frontend feita para o processo seletivo da Box3, interagindo com a Guardia Maria API.

## Setup e Como Executar o projeto

### Pré-requisitos

- Node.js (v18 ou maior)
- npm

### 1. Variáveis de ambiente

A aplicação se conecta ao Guardia Maria API. Você precisa configurar a URL base da API em um arquivo de ambiente.

Cria um arquivo chamado `.env.local` na raiz do projeto e adicione a seguinte variável:

```
VITE_API_URL=https://beta.guardia-api.box3.work/api
```

### 2. Instalação

Instale as dependências do projeto

```bash
npm install
```

### 3. Executando o servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173** por padrão.

## Escolhas técnicas

Este projeto foi construído com uma pilha moderna e eficiente, com foco na experiência e no desempenho do desenvolvedor.

-   **Vite:** Uma ferramenta de front-end de última geração que fornece um servidor de desenvolvimento extremamente rápido e um processo de construção otimizado.
-   **React:** Uma biblioteca declarativa e baseada em componentes para criar interfaces de usuário.
-   **TypeScript:** Adiciona tipagem estática ao JavaScript, melhorando a qualidade e a manutenção do código ao detectar erros durante o desenvolvimento.
-   **Tailwind CSS:** Uma estrutura CSS voltada para utilitários que permite o desenvolvimento rápido de interface do usuário diretamente na marcação, evitando a necessidade de arquivos CSS separados.
-   **React Router:** A biblioteca padrão para roteamento no React, permitindo navegação e composição de visualizações.
-   **Axios:** Um cliente HTTP baseado em promessa para fazer solicitações à API de backend.

---