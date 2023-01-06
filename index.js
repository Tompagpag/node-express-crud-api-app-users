import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(`${process.env.PORT || 3001}`, () => {
  console.log(`Serveur lancé sur le port : ${process.env.PORT || 3001}`)
})
