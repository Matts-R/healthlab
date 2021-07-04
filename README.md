# Health Space
[![NPM](https://img.shields.io/apm/l/react?style=for-the-badge)](https://github.com/Matts-R/healthlab/blob/main/LICENSE)
### Health Space é um projeto com fins não lucrativos com a intenção integrar tecnologia à saúde, visando o bem estar e a qualidade de vida.

---
![Tela Inicial](https://github.com/David-Jacobis/Assets/blob/main/Tela%20Inicial.jpeg)

---
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Utilizando o terminal instale o Express, Sequelize, Sequelize-auto, Sequelize-cli, MySql2, Bcrypt e o Cors seguindo o passo a passo abaixo:

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/Matts-R/healthlab.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd healthlab

# Vá para a pasta backend
$ cd backend

# Instale as dependências do backend
$ npm update

# Execute a aplicação backend
$ npm start

# Documentação do projeto na rota '/documentacao'
$ npm run swagger-autogen

# Vá para a pasta frontend
$ cd ../frontend

# Instale as dependências do frontend
$ npm update

# Execute a aplicação frontend
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
É necessario criar em seu banco de dados uma tebela chamada "healthlab" com as colunas, post, post_tag, tag, user e seus respectivos atributos. Depois conecta-la através da criação de uma pasta config e um arquivo config.json com o seguinte código:

```
{
    "development": {
      "username": "root",
      "password": "sua senha",
      "database": "healthlab",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "sua senha",
      "database": "healthlab",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": "sua senha",
      "database": "healthlab",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [Angular](https://angular.io/start)
- [Swagger](https://swagger.io/)

## Integrantes do grupo
---

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/david-jacobis/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/79882277?s=400&u=5b89e0ae40e565f9ce16bb76cd526d0e187c0dd7&v=4" width="100px;" alt=""/><br /><b> David Jacobis<br>LinkedIn </b></a><br /><a href="https://github.com/David-Jacobis" title="Git-Hub"><sub>Git-Hub</sub></a></td>
    <td align="center"><a href="https://www.linkedin.com/in/rafael-martins-silva/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80134985?v=4" width="100px;" alt=""/><br /><b>Rafael Martins<br>LinkedIn </b></a><br /><a href="https://github.com/Rafas-ms" title="Git-Hub"><sub>Git-Hub</sub></a></td>
    <td align="center"><a href="https://www.linkedin.com/in/natan-gonçalves-b81b84185/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/72225206?v=4" width="100px;" alt=""/><br /><b>Natan Gonçalves<br>LinkedIn </b></a><br /><a href="https://github.com/natanga00"title="Git-Hub"><sub>Git-Hub</sub></a></td>
    <td align="center"><a href="https://www.linkedin.com/in/gustavo-cristhian-581814165/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80134399?v=4" width="100px;" alt=""/><br /><b>Gustavo Christhian<br>LinkedIn </b></a><br /><a href="https://github.com/gu3800" title="Git-Hub"><sub>Git-Hub</sub></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/matheus-henrique-566904193/"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C5603AQF-hggjaa5ewA/profile-displayphoto-shrink_200_200/0/1612398440531?e=1625702400&v=beta&t=ix9nh387AqZu2r6EplH1VQsiO63gdmDOngSRJevk9CQ" width="100px;" alt=""/><br /><b>Matheus Henrique<br>LinkedIn </b></a><br /><a href="https://github.com/Matts-R" title="Git-Hub"><sub>Git-Hub</sub></a></td>
    <td align="center"><a href="http://www.linkedin.com/in/leonardohas"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/83249141?v=4" width="100px;" alt=""/><br /><b>Leonardo Henrique<br>LinkedIn </b></a><br /><a href="https://github.com/Leonardohas" title="Git-Hub"><sub>Git-Hub</sub></a></td>
    <td align="center"><a href="https://www.linkedin.com/in/pedro-coutinho-898ba4210/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/79882234?v=4" width="100px;" alt=""/><br /><b>Pedro Coutinho<br>LinkedIn </b></a><br /><a href="https://github.com/PedroHGCoutinho" title="Git-Hub"><sub>Git-Hub</sub></a></td>
    <td align="center"><a href="http://linkedin.com/in/cl%C3%A1udia-monteiro-751b72112"><img style="border-radius: 50%;" src="https://instagram.fplu9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/167416728_1360973667594199_1328727645316519527_n.jpg?tp=1&_nc_ht=instagram.fplu9-1.fna.fbcdn.net&_nc_ohc=H9jEj6rQ1BQAX84Ucs6&edm=ABfd0MgBAAAA&ccb=7-4&oh=276080dd4874ed605f8a709b25c08895&oe=60ADA673&_nc_sid=7bff83" width="100px;" alt=""/><br /><b>Cláudia Monteiro<br>LinkedIn </b></a><br /><a href="https://www.instagram.com/kkau_sm/" title="Instagram"><sub>Instagram</sub></a></td>
  </tr>
</table>

---
### Protótipo

* Link para o protótipo do projeto no figma: https://www.figma.com/file/gF1wCL2Vzp9nnPNAN1Q8PJ/Health-lab?node-id=0%3A1
---
### Vídeo explicativo

* Link para o vídeo: https://drive.google.com/drive/folders/1co3KrYqTRvGP4W58OA9wN02qRGGmCRIf?usp=sharing

<h4 align="center"> 
	🚧  Projeto 🚀 Em construção...  🚧
</h4>








