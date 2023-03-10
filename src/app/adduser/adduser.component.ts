import { UserService } from './../Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //providers: [UserService]
})
export class AdduserComponent {

  username:string = '';
  status: string = 'active';
  constructor(private userService: UserService){}


  AddUser(){
    this.userService.AddNewUser(this.username, this.status)
    console.log(this.userService.users);
    
  }

}
