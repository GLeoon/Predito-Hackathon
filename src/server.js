import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.jspn());
use.use(router);

app.listen(port, () =>{
    console.log(`O servidor esta rodando em http://localhost:${port}`)
})