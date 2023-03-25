import { Component, OnInit } from '@angular/core';
import { UserService } from '../backend/user.service';
import { login } from '../data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  authError:string="";
  constructor(private user : UserService){

  }

  ngOnInit(): void {
    
  }

  login(data: login) {
    this.user.userLogin(data)
    // console.log(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
        // this.localCartToRemoteCart();
        console.log();
      }
      
    })
  }
  
}
