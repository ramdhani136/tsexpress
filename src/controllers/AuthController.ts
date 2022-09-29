import { Request,Response } from "express";
const db = require("../db/models");
import Authentication from "../utils/Authentication";

class AuthController {
    register =  async(req: Request, res: Response): Promise<Response> => {
      const {username,password} = req.body;
      const hashedPassword: string = await Authentication.passwordHash(password);
      const createdUser = await db.user.create({
        username,
        password :hashedPassword
      });
      
      try {
        return res.status(200).json({status:"Berhasil menyimpan data",data:createdUser});
      } catch (error) {
       return  res.send("Connection Error!");
      }
    }
    
    login = async (req: Request, res: Response): Promise<Response> => {
        // cari data user by username
        let {username,password} = req.body;
        const user =await db.user.findOne({
          where:{username}
        })
        //check password
         if(user){
          let compare = await Authentication.passwordCompare(password,user.password);
          if(compare){
            const token =await Authentication.generateToken(user.id,user.username,user.password);
            return res.status(200).json({token});
          }else{
            return res.status(403).send("Wrong Password");
          }
        
         }

         return res.send("User Not found!");
        //generate token
    }
   
    
}

export default new AuthController();