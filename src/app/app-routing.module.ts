import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { DentictsComponent } from './denticts/denticts.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'services' , component:ServicesComponent},
  {path:'service-details' , component:ServiceDetailsComponent},
  {path:'dentict' , component:DentictsComponent},
  {path:'doctor-details' , component:DoctorDetailsComponent},
  {path:'booking' , component:BookingComponent},
  {path:'pricing' , component:PricingComponent},
  {path:'testimonials' , component:TestimonialsComponent},
  {path:'vaccine' , component:VaccineComponent},
  {path:'privacy' , component:PrivacyComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'blog' , component:BlogComponent},
  {path:'blog-details' , component:BlogDetailsComponent},
  {path:'contact' , component:ContactComponent},
  {path:'**' , component:NotfoundComponent},
  {path:'notfound' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
