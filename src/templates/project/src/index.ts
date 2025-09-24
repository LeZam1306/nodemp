import cookieParser from 'cookie-parser';
import cors from 'cors';
import type { Application } from 'express';
import express from 'express';
import mongoose from 'mongoose';
import type { Controller } from './controllers/Controller';
//import { __CONTROLLER__Controller } from './controllers/__CONTROLLER__Controller'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/goodholidays');
    console.log('Connection to goodholidays DB successful');
  } catch {
    console.log('Connection failed');
  }
};

connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

const controllers: Controller[] = [
  //,__CONTROLLER__Controller
]

controllers.forEach((controller) => {
  app.use(controller.path, controller.router);
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
