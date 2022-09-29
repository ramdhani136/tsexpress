import BaseRoutes from "./BaseRouter";
// Controller
import UsersController from "../controllers/UsersController";
// Middleware
import {auth} from "../middleware/AuthMiddleware";

class UserRoutes extends BaseRoutes{
    public  routes(): void {
        this.router.get("/",auth,UsersController.index);
        this.router.post("/",UsersController.create);
        this.router.get("/:id",UsersController.show);
        this.router.put("/:id",UsersController.update);
        this.router.delete("/:id",UsersController.delete);
    }
}

export default new UserRoutes().router;