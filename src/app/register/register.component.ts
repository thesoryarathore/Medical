import { Component, OnInit } from '@angular/core';
import { UserService } from '../backend/user.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
constructor(private user: UserService){

}

ngOnInit(): void {
  
}

signUp(data: signUp) {
  this.user.userSignUp(data);
  // console.log(data)
}

}
