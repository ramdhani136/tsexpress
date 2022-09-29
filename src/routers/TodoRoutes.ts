import BaseRoutes from "./BaseRouter";
// Controller
import TodoController from "../controllers/TodoController";
//middleware
import AuthMiddleware from "../middleware/AuthMiddleware";
import TodoValidator from "../middleware/TodoValidator";

class TodoRoutes extends BaseRoutes{
    public  routes(): void {
        this.router.get("/",AuthMiddleware,TodoController.index);
        this.router.post("/",AuthMiddleware,TodoValidator,TodoController.create);
        this.router.get("/:id",AuthMiddleware,TodoController.show);
        this.router.put("/:id",AuthMiddleware,TodoValidator,TodoController.update);
        this.router.delete("/:id",AuthMiddleware, TodoValidator,TodoController.delete);
    }
}

export default new TodoRoutes().router;