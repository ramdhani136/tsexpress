import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");
import TodoService from "../services/TodoService";

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service:TodoService =  new TodoService(req);
      const todos = await service.getAll();
      return res.status(200).send(todos);
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error");
    }
  };
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service:TodoService =  new TodoService(req);
      const todos = await service.store();
      return res.status(200).send(todos);
    } catch (error) {
      return res.status(400).send(error);
    }
  };
  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service:TodoService =  new TodoService(req);
      const todos = await service.getOne();
      if (todos) {
        return res.status(200).send(todos);
      } else {
        return res.status(400).send("Data not found!");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error");
    }
  };
  update = async (req: Request, res: Response): Promise<Response> => {
    const service:TodoService =  new TodoService(req);
    try {
      const todos = await service.getOne();
      if (todos) {
        try {
          await service.update();
          return res.status(200).send("Success update");
        } catch (error) {
          return res.status(400).send("error");
        }
      } else {
        return res.status(400).send("Data not found!");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error");
    }
  };
  delete = async (req: Request, res: Response): Promise<Response> => {
    const service:TodoService =  new TodoService(req);
    try {
      const data = await service.getOne();
      if (data) {
        try {
          await service.delete();
          return res.status(200).send("Success delete");
        } catch (error) {
          return res.status(400).send("error");
        }
      } else {
        return res.status(400).send("Data not found!");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error");
    }
  };
}

export default new TodoController();
