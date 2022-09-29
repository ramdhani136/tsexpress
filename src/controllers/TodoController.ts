import { Request,Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");

class TodoController implements IController{
    index = async(req: Request, res: Response): Promise<Response> => {
      try {
        const data = await db.todo.findAll({});
      return res.status(200).send(data);
      } catch (error) {
        console.log(error);
        return res.status(400).send("Error");
      }
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const {user_id,description} = req.body;
        try {
            const createData = await db.todo.create({
                user_id,description
            });
            return res.status(200).send(createData);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    show = async(req: Request, res: Response): Promise<Response> => {
        const {id} = req.params;
        try {
        const data = await db.todo.findOne( {where:{id}});
          if(data){
            return res.status(200).send(data);
          }else{
            return res.status(400).send("Data not found!");
          }
          } catch (error) {
            console.log(error);
            return res.status(400).send("Error");
          }
    }
    update = async(req: Request, res: Response): Promise<Response> => {
        const {id} = req.params;
        try {
        const data = await db.todo.findOne( {where:{id}});
          if(data){
            try {
                await db.todo.update(req.body,{where:{id:id}});
                return res.status(200).send("Success update");
            } catch (error) {
                return res.status(400).send("error");
            }
          }else{
            return res.status(400).send("Data not found!");
          }
          } catch (error) {
            console.log(error);
            return res.status(400).send("Error");
          }
    }
    delete = async(req: Request, res: Response): Promise<Response> => {
        const {id} = req.params;
        try {
        const data = await db.todo.findOne({where:{id}});
          if(data){
            try {
                await db.todo.destroy({where:{id:id}});
                return res.status(200).send("Success delete");
            } catch (error) {
                return res.status(400).send("error");
            }
          }else{
            return res.status(400).send("Data not found!");
          }
          } catch (error) {
            console.log(error);
            return res.status(400).send("Error");
          }
        
    }
    
}

export default new TodoController();