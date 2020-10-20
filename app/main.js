import ListController from "./Controllers/ListController.js"
import TaskController from "./Controllers/TaskController.js";
class App {
  // TODO load your controllers here
listController = new ListController();
taskController = new TaskController()
}

window["app"] = new App();
