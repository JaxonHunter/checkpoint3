import Task from "../Models/Task.js"
import {ProxyState} from "../AppState.js"
import {saveState} from "../Utils/LocalStorage.js"


class TaskService {
  constructor() {
    ProxyState.on("tasks", saveState)
  }

  delete(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    console.log(ProxyState.tasks);
  }

  create(newTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks);
  }

}

export const taskService = new TaskService();
