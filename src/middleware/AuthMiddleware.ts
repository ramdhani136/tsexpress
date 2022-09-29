import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

class AuthMiddleware{
  public static  auth = (req:Request,res:Response,next:NextFunction):any=>{
    if(!req.headers.authorization){
      return res.status(401).send("Forbidden, invalid token");
    }
  
    let secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token: string = req.headers.authorization.split(" ")[1];
    
    try {
      const credential:string | object = jwt.verify(token,secretKey);
      if(credential){
          req.app.locals.credential = credential;
          return next();
      }else{
        return res.send("Error VerifyToken");
      }
    } catch (error) {
     return res.send(error);
    }
  }
}

export default AuthMiddleware.auth;

