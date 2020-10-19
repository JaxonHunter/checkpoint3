import ListController from "./Controllers/ListController.js"
class App {
  // TODO load your controllers here
listController = new ListController()
}

window["app"] = new App();
