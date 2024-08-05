import {Component, EventEmitter, inject, Input, Output, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { type NewTaskData} from "../../task/newTaskData";
import {TaskService} from "../../task/task.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required:true})  userId !:string
  @Output() close = new EventEmitter<void>();

  enteredTittle = ''
  enteredSummary = ''

  enteredDate = ''

  private taskService= inject(TaskService    )

  onCancel() {

    this.close.emit();

  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTittle,
        summary: this.enteredSummary,
        date: this.enteredDate

      }, this.userId
    )


  }

}
