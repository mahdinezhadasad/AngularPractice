import {NewTaskData} from "./newTaskData";
import {Injectable} from "@angular/core";




@Injectable({providedIn: 'root'})
export  class TaskService{


  private tasks = [{

    id: 't1',
    userId:'u1',
    title: 'Task 1 for User 1',
    summary:'Learn all the basic andadvance features of Angular and how to apply them',
    dueDate:'2025-12-31'


  },
    {

      id: 't2',
      userId:'u3',
      title: 'Task 1 for User 1',
      summary:'Learn all the basic andadvance features of Angular and how to apply them',
      dueDate:'2025-12-31'


    },
    {

      id: 't2',
      userId:'u3',
      title: 'Task 1 for User 1',
      summary:'Learn all the basic andadvance features of Angular and how to apply them',
      dueDate:'2025-12-31'


    },{

      id: 't2',
      userId:'u3',
      title: 'Task 1 for User 1',
      summary:'Learn all the basic andadvance features of Angular and how to apply them',
      dueDate:'2025-12-31'


    }]


  getUserTasks(userId:string){

    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(taskData: NewTaskData, userId:string){

    this.tasks.unshift({

      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title.toString(),
      summary: taskData.summary.toString(), dueDate: taskData.date.toString()

    })




    }
  removeTask(id:string){

    this.tasks = this.tasks.filter((task) => task.id !==id)
  }
}
