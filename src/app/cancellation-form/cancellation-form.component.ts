import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-cancellation-form',
  templateUrl: './cancellation-form.component.html',
  styleUrls: ['./cancellation-form.component.css']
})
export class CancellationFormComponent implements OnInit {
  toggler:boolean=false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  cancelTicket(item: { value: string; })
  {
    this.userService.cancelTicketWithPNR(item.value).subscribe(
      (data)=>console.log(data)
    )
    alert("Ticket Canceled with PNR number: "+item.value)
    this.toggler=true;
    item.value=""
  }

}
