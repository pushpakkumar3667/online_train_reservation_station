import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainModel } from '../_services/trainModel';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-trains',
  templateUrl: './add-trains.component.html',
  styleUrls: ['./add-trains.component.css']
})
export class AddTrainsComponent implements OnInit {

  newTrain= new TrainModel("","","","","","","","",0,0,);
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdd()
  {
    console.log(this.newTrain);
    this.userService.addNewTrain(this.newTrain).subscribe(
      (data)=>console.log("success",data),
      (error)=>console.log("error",error)
    )
    alert("Added Train with Number: "+this.newTrain.trainNumber)
    this.router.navigate(['admin/allTrains'])
    
  }
}
