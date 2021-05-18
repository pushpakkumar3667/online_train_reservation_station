import { Component, OnInit } from '@angular/core';
import { BookingFormModel } from '../_services/bookingModel';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  alert:boolean=false;
  generated_pnr:string=String(localStorage.getItem('pnrnum'));
  constructor(private userService: UserService) { }
 newBooking=new BookingFormModel(localStorage.getItem('pnrnum'),"",localStorage.getItem('tNumber'),localStorage.getItem('tName'),"",localStorage.getItem('sourcest'),localStorage.getItem('dest'),localStorage.getItem('boardTime'),"","","","","",localStorage.getItem('tcost'));

  ngOnInit(): void {localStorage.setItem('pnrnum',this.generateRandomString(10))}

  generateRandomString(length){
    var chars = '0123456789';
    var random_string = '';
    if(length > 0){
      for(var i=0; i < length; i++){
          random_string += chars.charAt(Math.floor(Math.random() * chars.length));
      }
  }
    return random_string;
}



onSub()
{
  
  console.log(this.newBooking)
  this.alert=true;
  this.userService.savePassengerDetails(this.newBooking).subscribe(
    (data)=>console.log("success",data),
      (error)=>console.log("error",error)
  )
}
}
