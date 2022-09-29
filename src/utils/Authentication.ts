import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication{
    public static passwordHash = async (password: string):Promise<string> =>{
        return bcrypt.hash(password,10);
    }

    public static passwordCompare =async (text:string,encryptedText:string):Promise<boolean>=> {
          let result = await bcrypt.compare(text,encryptedText);

          return result;
    }

    public static generateToken =async (id:number, username:string, password:string):Promise<string> =>{
       const secretKey :string =await process.env.JWT_SECRET_KEY|| "secret";

       const token:string =await jwt.sign({ id,username,password },secretKey)

       return token;
    }
}


export default Authentication;