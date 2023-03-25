import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-testimonial-part',
  templateUrl: './testimonial-part.component.html',
  styleUrls: ['./testimonial-part.component.scss']
})
export class TestimonialPartComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin:25,
    autoplaySpeed:1000,
    autoplay:true,
    autoplayTimeout:5000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  }
}
