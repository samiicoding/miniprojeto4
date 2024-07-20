import express from "express";
import { peopleRouter } from "./routes/people.route.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(peopleRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })