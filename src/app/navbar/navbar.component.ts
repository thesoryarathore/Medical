import { Component , OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  userName:string="";
  constructor(){
    
  }

  ngOnInit(): void {
    
    window.onscroll = function() {myFunction()};

    const navbar = document.querySelector(".navbar-area");
    
    function myFunction() {
      if (window.pageYOffset>=20) {
        navbar?.classList.add("sticky")
      } else {
        navbar?.classList.remove("sticky");
      }
    }
 
  }


}


