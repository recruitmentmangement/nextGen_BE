const fs = require("fs");
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const { mockData } = require("./src/clients/next-gen/mock-data");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const dbFilePath = path.join(__dirname, "db.json");

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.options("*", cors());

//--------------mockedData----------------

const dbData = JSON.stringify(mockData);
fs.writeFileSync(dbFilePath, dbData);

//---------add Custom Routes--------------

// customRoutes.addCustomRoutes(server);
// cortexRoutes.addCustomRoutes(server);

//--------------------------------------------
const router = jsonServer.router(dbFilePath); // give router path of db.json file
// router.db._.id='_id';       // uncomment this if you want to use _id instead of id for default routes
server.use('*', (req, res, next) => {
  if (req.method === 'POST') {
    const modifiedBody = { ...req.body.body, ...req.body };
    delete modifiedBody.body;
    req.body = modifiedBody;
  }
  next();
});
server.use(router);
server.use('*', (req, res, next) => {
  res.send({message:'server is up and running ;D'});
});
server.use(router);

const port = process.env.PORT||4000;

server.listen(port, () => {
  console.log("JSON Server is running on http://localhost:" + port);
});
