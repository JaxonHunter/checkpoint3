import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title
    this.listId = data.listId
  }
  //Be sure to add the methods needed to create the view template for this model
  get Template() {

    return /*html*/`
        <div class="col-12 border rounded shadow-lg">
            <h3>${this.title} <button class="text-danger close mt-3 float-right" onclick="app.taskController.confirmDelete('${this.id}')"><span>&times;</span></button></h3>
        </div>
        `
  }
}
