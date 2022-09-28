import { Request,Response } from "express";
const db = require("../db/models");

class AuthController {
    register =  async(req: Request, res: Response): Promise<Response> => {
      const {username,password} = req.body;
      const createdUser = await db.user.create({
        username,
        password
      });
      
      try {
        return res.status(200).json({status:"Berhasil menyimpan data",data:createdUser});
      } catch (error) {
       return  res.send("Connection Error!");
      }

     
    }
    login(req: Request, res: Response): Response {
        return res.send("");
    }
   
    
}

export default new AuthController();