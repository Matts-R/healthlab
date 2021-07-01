const swaggerAutogen = require("swagger-autogen")()
const arquivoSaida = './swagger_doc.json';
const routes = ['./index.js'];

const docs = {
    info: {
        version: "1.0",
        title: "Health Space",
        description: "Health Space é um projeto com fins não lucrativos com a intenção integrar tecnologia à saúde, visando o bem estar e a qualidade de vida."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['aplication/json'],
    produces: ['aplication/json'],
    tags: [
        {
            "name": "Usuários",
            "description": "Rotas dos usuários"
        },
        {
            "name": "Posts",
            "description": "Rotas dos posts"
        },
        {
            "name": "Tags",
            "description": "Rotas das tags"
        }
    ],
    definitions: {
        User: {
            login: "Rafael",
            password: "rafa123",
            email: "rafael@healthspace.com"
        },
        Post: {
            body_text: "Texto de exemplo sobre nutrição",
            user_id: 1
        },
        Tag: {
            name: "Nutrição"
        }
    }
}

swaggerAutogen(arquivoSaida,routes, docs).then (() => {
    require('./index.js');
})
 
