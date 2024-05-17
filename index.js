const express = require('express');
require('dotenv').config();
const openaiRoutes = require('./routes/openaiRoutes');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello  OPENAI CHATBOT")
});

app.use('/api', openaiRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
