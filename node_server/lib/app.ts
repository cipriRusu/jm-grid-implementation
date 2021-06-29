import express = require("express");
import { DataRepository } from "./Data/DataRepository";

const app = express();
const port = 4000;

app.set("json spaces", 4);
app.use(express.json({ limit: "1mb" }));

let data = new DataRepository();

app.get("/users", (request, response) => {
  let currentData = data.get(request.query);
  response.header("Access-Control-Allow-Origin", "*");
  response.json(currentData);
  response.end();
});

app.get("/userCount", (request, response) => {
  let currentData = data.getCount(request.query);
  response.header("Access-Control-Allow-Origin", "*");
  response.json(currentData);
  response.end();
});

app.listen(port);
