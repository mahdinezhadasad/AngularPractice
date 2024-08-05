import { Component, Input } from '@angular/core';
import {TaskComponent} from "../task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NgForOf, NgIf} from "@angular/common";
import {TaskService} from "../task/task.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [
    TaskComponent, NewTaskComponent, NgForOf, NgIf
  ],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input({required:true}) userId!:string
  @Input() name?: string;
  isAddingTask = false;

  constructor(private taskService:TaskService) {
  }



  get selectedUserTask(){

     return this.taskService.getUserTasks( this.userId)
  }



  onStartAddTask(){
     this.isAddingTask = true;

  }

  onCancelAddTask(){

     this.isAddingTask=false;
  }


}
