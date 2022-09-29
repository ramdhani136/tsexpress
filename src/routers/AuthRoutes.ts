import BaseRoutes from "./BaseRouter";
import AuthController from "../controllers/AuthController";
import AuthValidator from "../middleware/AuthValidator"; // middleware

class AuthRoutes  extends BaseRoutes{
    public  routes(): void {
        this.router.post("/register",AuthValidator, AuthController.register);
        this.router.post("/login",AuthController.login);
    }
    
}

export default new AuthRoutes().router;