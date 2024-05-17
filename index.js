/** @format */

const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello  OPENAI CHATBOT")
});


app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
