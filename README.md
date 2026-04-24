# 📰 Portal de Notícias

Este projeto é um sistema completo de gerenciamento de notícias com múltiplos níveis de acesso, desenvolvido com foco em simular um ambiente real de publicação e administração de conteúdo.

---

## 🚀 Tecnologias Utilizadas

* React
* TypeScript
* React Router
* CSS / Styled Components (ou equivalente)

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/LuizHerran/Site_fake_news.git
```

### 2. Acesse a pasta do projeto

```bash
cd portal-noticias
```

### 3. Instale as dependências

```bash
npm install
```


### 4. Execute o projeto 
```
npm run dev
```

5. Acesse no navegador

Normalmente o projeto estará disponível em:
```
http://localhost:5173
```
Segure Ctrl e clique!


🧠 Sobre o Sistema

O sistema simula um portal de notícias com diferentes tipos de usuários, cada um com permissões específicas.

👥 Tipos de Usuário
Público: pode visualizar notícias
Leitor: pode acessar conteúdos de forma personalizada
Autor: responsável por criar notícias
Editor: revisa e aprova conteúdos
Administrador: gerencia usuários e dados do sistema
🗂️ Estrutura do Projeto

O projeto está organizado de forma modular para facilitar manutenção e escalabilidade:

components/ → Componentes reutilizáveis (botões, cards, modais, etc.)
pages/ → Páginas separadas por contexto (autor, editor, admin, etc.)
layout/ → Layouts específicos por tipo de usuário
data/ → Dados mockados simulando um backend
routes/ → Gerenciamento das rotas da aplicação
📰 Funcionalidades
CRUD de notícias
Gerenciamento de usuários
Gerenciamento de categorias/tags
Controle de permissões por tipo de usuário
Navegação com rotas protegidas
⚠️ Observações
Atualmente o projeto utiliza dados mockados (sem backend real)
Ideal para fins de estudo, prototipagem e portfólio
📌 Melhorias Futuras
Integração com backend real (API REST)
Autenticação de usuários
Persistência de dados em banco de dados
Melhorias de UI/UX (feedbacks, loading, etc.)
👨‍💻 Autor

Desenvolvido por Luiz Rocha, Victor Nogueira, Matheus Rios e Gustavo Xavier

📄 Licença

Este projeto é de uso livre para fins de estudo.
