const express = require("express");
const app = express();
const routes = require('./src/routes/user.router')

const port = 3000;

app.use(express.json());
app.use('/users', routes)


app.listen(port, () => {
    console.log(`Run server in http://localhost:${port}`);
})
