import { Component, OnInit } from '@angular/core';
import { TrainModel } from '../_services/trainModel';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-all-trains',
  templateUrl: './all-trains.component.html',
  styleUrls: ['./all-trains.component.css']
})
export class AllTrainsComponent implements OnInit {

  allTrains: TrainModel[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllTrains().subscribe((data: any[])=>{this.allTrains=data;console.log(data);})
   
  }

}
