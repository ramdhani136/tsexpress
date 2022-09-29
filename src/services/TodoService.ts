const db = require("../db/models");
import { Request } from "express";

class TodoService{
    credential:{
        id:number
    };
    body: Request['body'];
    params: Request['params'];

    constructor(req:Request){
        this.credential=req.app.locals.credential;
        this.body = req.body;
        this.params= req.params;
    }

    getAll = async () => {
        const data = await db.todo.findAll({});
        return data;
    }

    store = async () => {
        const { description } = this.body;
        const createData = await db.todo.create({
            user_id: this.credential.id,
            description,
          });
          return createData;
    }

    getOne = async () => {
        const data = await db.todo.findOne({ where: { id:this.params.id } });
        return data;
    }

    update = async () => {
        console.log(this.body)
        const data = await db.todo.update(this.body, { where: { id: this.params.id } });
        return data;
    }

    delete = async () => {
        const data =  await db.todo.destroy({ where: { id: this.params.id } });
        return data;
    }   
}

export default TodoService;
