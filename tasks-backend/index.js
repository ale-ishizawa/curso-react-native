const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

//Consign carrega os arquivos na const app, e os módulos exportados(funções) desses arquivos
// poderão ser acessados via app.api.users.save...   
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

//Aqui eu recebo o módulo db que executa as migrations
app.db = db

app.listen(3000, () => {
  console.log('Backend executando..')
})