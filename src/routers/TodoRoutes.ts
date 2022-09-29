import BaseRoutes from "./BaseRouter";
// Controller
import TodoController from "../controllers/TodoController";
//middleware
import {auth} from "../middleware/AuthMiddleware";
import TodoValidator from "../middleware/TodoValidator";
class TodoRoutes extends BaseRoutes{
    public  routes(): void {
        this.router.get("/",auth,TodoController.index);
        this.router.post("/",auth,TodoValidator,TodoController.create);
        this.router.get("/:id",auth,TodoController.show);
        this.router.put("/:id",auth,TodoValidator,TodoController.update);
        this.router.delete("/:id",auth, TodoValidator,TodoController.delete);
    }
}

export default new TodoRoutes().router;