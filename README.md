
![logo-png](https://github.com/user-attachments/assets/82e0430f-b09b-4d7c-9f18-76abe6830b10)

# Renthon Pizzaiolo BACKEND
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ffff00?style=for-the-badge&logo=JavaScript&logoColor=black) ![NodeJS Badge](https://img.shields.io/badge/NodeJS-88cc34?style=for-the-badge&logo=nodedotjs&logoColor=black) ![TypeScrypt Badge](https://img.shields.io/badge/TypeScrypt-387ccc?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma Badge](https://img.shields.io/badge/Prisma-183c54?style=for-the-badge&logo=Prisma&logoColor=white) ![JsonWebToken Badge](https://img.shields.io/badge/JsonWebToken-fb0960?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

A parte do Backend do RenthonPizzaiolo implementa uma API RESTful que serve para criar os endpoints e se comunicar tanto com a aplicação Front-end (cozinha), tanto com a Mobile (garçom). Ele oferece operações para criar, listar, atualizar e excluir pedidos, produtos, categorias, e usuários, além de funcionalidades de autenticação e autorização com tokens JWT.

## Índice 

* [Título e Descrição](#Renthon-Pizzaiolo-BACKEND)
* [Índice](#índice)
* [Funcionalidades do Projeto](#-funcionalidades-do-projeto)
* [Tecnologias Utilizadas](#%EF%B8%8F-técnicas-e-tecnologias-utilizadas)
* [Acesso ao Projeto](#-acesso-ao-projeto)
* [Abrir e Rodar o Projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)
* [Detalhamento do Código Java](#-detalhamento-do-código)

## 🔨 Funcionalidades do projeto

O API do Renthon Pizzaiolo oferece as seguintes funcionalidades:

- Criação, detalhamento, e login de Usuários.
- Criação e listagem de Categorias.
- Criação e listagem (por categoria) de Produtos.
- Criação, listagem, detalhamento, atualização (garçom -> enviar para a cozinha; cozinha -> concluir pedido) e exclusão de Pedidos.

## ✔️ Técnicas e tecnologias utilizadas

- `JavaScript`: Utilizado em partes específicas do projeto para funcionalidades adicionais.
- `NodeJS`: Ambiente de execução utilizado para o desenvolvimento do servidor.
- `TypeScript`: Linguagem principal utilizada no desenvolvimento do projeto, trazendo tipagem estática para o JavaScript.
- `Prisma`: ORM utilizado para facilitar a comunicação com o banco de dados, gerenciamento de esquemas e consultas.
- `JsonWebToken`: Utilizado para a autenticação e autorização dos usuários, gerando e validando tokens JWT.
- `Express`: Framework minimalista para Node.js utilizado para construir a API RESTful.
- `PostgreSQL`: Banco de dados utilizado para armazenar dados da aplicação.
- `bcrypt`: Biblioteca usada para hashing de senhas para garantir a segurança dos dados de usuário.

## 📁 Acesso ao projeto

Você pode acessar o código fonte do projeto [aqui](https://github.com/heitor34studio/renthon-pizzaiolo-backend/tree/main/src).

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, siga os seguintes passos:

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/heitor34studio/renthon-pizzaiolo-backend.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd RenthonPizzaioloBackend;
    ```

3. Execute o projeto:
    ```sh
    yarn dev
    ```

### Detalhamento do código:

O código TypeScript fornecido implementa uma API RESTful para gerenciamento de uma pizzaria e seus pedidos.

#### prisma/schema.prisma
Define o esquema do banco de dados e as configurações do Prisma ORM, incluindo modelos de dados e conexões com o banco de dados.

#### src/@types/express/index.d.ts
Extende a interface Request do Express para incluir a propriedade user_id.

#### src/config/index.ts
Carrega as variáveis de ambiente e valida se JWT_SECRET está definido, exportando-a para uso no projeto.

#### src/config/multer.ts
Configura o multer para gerenciamento de uploads de arquivos, definindo a estratégia de armazenamento e a geração de nomes de arquivos únicos.

#### src/controllers/*/*.ts
Controladores responsáveis por filtrar os dados passados pelo body, e chamar o seu respectivo serviço, e retornar o resultado.

#### src/middleware/isAuthenticated.ts
Middleware que verifica a autenticação do usuário por meio de um token JWT, adicionando o user_id à requisição se válido.

#### src/prisma/index.ts
Inicializa e exporta uma instância do PrismaClient para interagir com o banco de dados.

#### src/services/*/*.ts
Serviços responsáveis por manipular os dados passado pelo front-end e cumprir sua função com o DB. 
- Categoria:
  - Criar uma Categoria.
  - Listar Categorias.
- Order:
  - Adicionar um Item em um Pedido.
  - Criar um Pedido.
  - Detalhar um Pedido.
  - Concluir um Pedido (cozinha).
  - Listar Pedidos.
  - Remover um Item de um Pedido.
  - Excluir um Pedido (cliente desistiu).
  - Enviar um Pedido (do garçom para a cozinha).
- Product:
  - Criar um Produto.
  - Listar Produtos.
- User:
  - Autenticar um Usuário.
  - Criar um Usuário.
  - Detalhar um Usuário.

#### src/routes.ts
Define todas as rotas da aplicação, mapeando URLs para os controladores correspondentes e aplicando middlewares de autenticação e upload de arquivos.

#### src/server.ts
Configura e inicializa o servidor Express, aplicando middlewares, definindo rotas e tratando erros globais.

### Exemplo de Uso
Ao executar o programa, o usuário pode fazer requisições HTTP para o endereço: http://localhost:3333/{endpoint_escolhido}, e manipular os dados do BD.

---

Este é o README atualizado para o BACKEND do projeto Renthon Pizzaiolo. Ele fornece uma visão geral do projeto, suas funcionalidades, tecnologias utilizadas e como acessar e rodar o projeto. Para mais detalhes, você pode explorar os arquivos do código fonte mencionados.
