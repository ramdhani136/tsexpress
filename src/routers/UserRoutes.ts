import BaseRoutes from "./BaseRouter";
// Controller
import UsersController from "../controllers/UsersController";
// Middleware
import {auth} from "../middleware/AuthMiddleware";

class UserRoutes extends BaseRoutes{
    public  routes(): void {
        this.router.get("/",auth,UsersController.index);
        this.router.route("/").post(UsersController.create);
        this.router.route("/:id").get(UsersController.show);
        this.router.route("/:id").put(UsersController.update);
        this.router.route("/:id").delete(UsersController.delete);
    }
}

export default new UserRoutes().router;