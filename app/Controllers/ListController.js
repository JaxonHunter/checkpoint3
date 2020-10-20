import { listService } from "../Services/ListService.js";
import { ProxyState } from "../AppState.js";
import {loadState} from "../Utils/LocalStorage.js";
const Swal = window.Swal;
//TODO Don't forget to render to the screen after every data change.
function _drawLists() { 
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template

}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    loadState();
    ProxyState.on("lists", _drawLists);
    ProxyState.on("tasks", _drawLists);
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete lists
  createList(event) {
    event.preventDefault()
    let form = event.target
    let newList = {
      // title: e.target.title.value
      listname: form.listname.value,
      colorchoice: form.colorchoice.value
    }
    listService.create(newList)
    form.reset()
  }
  delete(id) {
    listService.delete(id)
  }

  confirmDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
