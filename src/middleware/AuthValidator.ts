import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";


class AuthValidator{
    public static validate = [
        check('username').isString(),
        check('password').isLength({min:6}),
        (req:Request,res:Response,next:NextFunction)=>{
            const errors = validationResult(req);
    
            if(!errors.isEmpty()){
                return res.status(422).send({errors:errors.array()});
            }else{
              return next();
            }
        }
    ]
    
}

export default AuthValidator.validate;
