import {Component, computed, signal, input, Input, Output, EventEmitter} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {CardComponent} from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() *DUMMY_USERS.length);
/*type User = {
  id:string;
  avatar:string;
  name:string
}*/

interface User{
  id: string;
  avatar:string;

  name:string;

}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) selected !:boolean;
  @Input({required :true}) user !: User

 @Output() select = new EventEmitter();

/*
  avatar = input.required<string>();
  name = input.required<string>();*/

  imagePath = computed(
    () => {
      return 'assets/users/' + this.user.avatar;

    }


  )
  selectedUser = signal(DUMMY_USERS[randomIndex]) ;
/*  get imagePath(){

    return 'assets/users/' + this.avatar;
  }*/



  onSelectUser(){
   this.select.emit(this.user.id
   )
  }

}
