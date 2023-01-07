import express from "express";
import * as dotenv from 'dotenv';
import usersRoutes from './routes/users.route';
dotenv.config()

const app = express();

app.use('/users', usersRoutes)

app.listen(`${process.env.PORT || 3001}`, () => {
  console.log(`Serveur lancé sur le port : ${process.env.PORT || 3001}`)
})
