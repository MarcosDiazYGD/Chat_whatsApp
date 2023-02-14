const express = require("express");
const handleResponse = require("./utils/handleResponses");
const db = require("./utils/database");
const initModels = require("./models/initModels");
// ROUTES
const messagesRouters = require("./messages/messages.routers");
const conversationsRouters = require("./conversations/conversations.routers");
const usersRouters = require("./users/users.routers");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  handleResponse.success({
    res,
    status: 200,
    message: "Server initialized successfully",
    data: {
      users: "http://localhost:9000/api/v1/users",
      conversations: "http://localhost:9000/api/v1/conversations",
      messages: "http://localhost:9000/api/v1/messsages",
      participants: "http://localhost:9000/api/v1/participants",
    },
  });
});

db.authenticate() // Mostrar en consola de manera informativa si la coneccion se hizo de manera correcta
  .then(() => console.log("Las credenciales de la base de datos son correctas"))
  .catch((err) => console.log(err)); // Error de autenticacion (pass, host, username)

db.sync() // sincroniza nuestra base de datos con los modelos que tenemos definidos
  .then(() => {
    console.log("La base de datos ha sido actualizada");
  })
  .catch((err) => {
    console.log(err); // error en las tablas, propiedades, etc
  });

initModels();

//  ROUTES
app.use("/api/v1", messagesRouters);
app.use("/api/v1", conversationsRouters);
app.use("/api/v1", usersRouters);






app.use("*", (req, res) => {
  handleResponse.error({
    res,
    status: 404,
    message: "Url not found",
  });
});

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
