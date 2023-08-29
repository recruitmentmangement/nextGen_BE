// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const recruitmentRoutes = require('./clients/recruitments')
const fileUpload = require("express-fileupload");
const path = require("path");

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(
    fileUpload()
  );
server.use(middlewares)
server.use(jsonServer.bodyParser);
recruitmentRoutes.addCustomRoutes(server);

server.use(router)

server.listen(4000, () => {
    console.log('JSON Server is running')
})

module.exports = server
