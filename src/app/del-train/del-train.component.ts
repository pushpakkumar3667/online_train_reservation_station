import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-del-train',
  templateUrl: './del-train.component.html',
  styleUrls: ['./del-train.component.css']
})
export class DelTrainComponent implements OnInit {
  toggler:boolean=false;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  delTrain(item: { value: string; })
  {
    console.log("working")
    alert("Deleted Train with TrainNumber: "+item.value)
    this.userService.deleteTrain(item.value).subscribe((data)=>console.log(data))
   
    this.router.navigate(['admin/allTrains'])
    this.toggler=true;
  }
}
