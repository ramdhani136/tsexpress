import BaseRoutes from "./BaseRouter";
// Controller
import UsersController from "../controllers/UsersController";
// Middleware
import AuthMiddleware from "../middleware/AuthMiddleware";

class UserRoutes extends BaseRoutes{
    public  routes(): void {
        this.router.get("/",AuthMiddleware,UsersController.index);
        this.router.post("/",AuthMiddleware,UsersController.create);
        this.router.get("/:id",AuthMiddleware,UsersController.show);
        this.router.put("/:id",AuthMiddleware,UsersController.update);
        this.router.delete("/:id",AuthMiddleware,UsersController.delete);
    }
}

export default new UserRoutes().router;