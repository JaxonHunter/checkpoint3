import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
import { taskService } from "../Services/TaskService.js";
const Swal = window.Swal;

//Private


//Public
export default class TaskController {

  create(e, listId) {
    e.preventDefault()

    let form = e.target

    let newTask = {
      title: form.taskTitle.value,
      // listId
      listId: listId
    }
    taskService.create(newTask)

    form.reset()
  }

  delete(id) {
    taskService.delete(id)
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
