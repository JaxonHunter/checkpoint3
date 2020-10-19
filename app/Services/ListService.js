import List from "../Models/List.js";
import Task from "../Models/Task.js"
import {ProxyState } from "../AppState.js"
import {saveState} from "../Utils/LocalStorage.js"
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
    constructor() {
      ProxyState.on("lists", saveState)
    }
    delete(id) {
      ProxyState.lists = ProxyState.lists.filter(t => t.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
      console.log(ProxyState.tasks);
      console.log(ProxyState.lists);
  }
  create(newList) {
    let lists = ProxyState.lists
    lists.push(new List(newList))
    ProxyState.lists = lists
    console.log(ProxyState.lists);
  }
}
export const listService = new ListService();
