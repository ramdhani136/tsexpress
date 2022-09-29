import { Request,Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");



class TodoController implements IController{
    index(req: Request, res: Response): Response {
      return res.send("");
    }
    create(req: Request, res: Response): Response {
        return res.send("");
    }
    show(req: Request, res: Response): Response {
        return res.send("");
    }
    update(req: Request, res: Response): Response {
        return res.send("");
    }
    delete(req: Request, res: Response): Response {
        return res.send("");
        
    }
    
}

export default new TodoController();