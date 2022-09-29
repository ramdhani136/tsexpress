import BaseRoutes from "./BaseRouter";
// Controller
import TodoController from "../controllers/TodoController";
//middleware
import {auth} from "../middleware/AuthMiddleware";
class TodoRoutes extends BaseRoutes{
    public  routes(): void {
        this.router.get("/",auth,TodoController.index);
        this.router.post("/",auth,TodoController.create);
        this.router.get("/:id",auth,TodoController.show);
        this.router.put("/:id",auth,TodoController.update);
        this.router.delete("/:id",auth, TodoController.delete);
    }
}

export default new TodoRoutes().router;