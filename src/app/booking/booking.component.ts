// import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { UserService } from '../backend/user.service';
import { book } from '../data-type';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{
  Bookingmsg: string | undefined; 
constructor(private user: UserService){

}

ngOnInit(): void {
  
}

Booking(data: book) {
  this.user.userBooking(data);
  // console.log(data)
  if(data){
    this.Bookingmsg = ' your booking is  successfully';
  }


  setTimeout(() => {
    this.Bookingmsg=undefined
  }, 3000);
  
}

}
