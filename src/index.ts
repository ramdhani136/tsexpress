import express,{Application} from 'express';
import bodyParser from 'body-parser';
import morgan from "morgan";
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import UserRoutes from './routers/UserRoutes';
import AuthRoutes from './routers/AuthRoutes';
import {config as dotenv} from 'dotenv'; // membaca file .env menyimpan data rahasia di .env
import TodoRoutes from './routers/TodoRoutes';

class App{
    public app:Application;

    constructor(){
        this.app= express();
        this.Plugins();
        this.routes();
        dotenv();
    }

    protected Plugins():void{
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes():void{
       this.app.use('/users',UserRoutes);
       this.app.use('/auth',AuthRoutes);
       this.app.use('/todo',TodoRoutes);
    }
}

const port:number =  5000;
const app = new App().app;
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});