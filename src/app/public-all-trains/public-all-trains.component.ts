import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainModel } from '../_services/trainModel';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-public-all-trains',
  templateUrl: './public-all-trains.component.html',
  styleUrls: ['./public-all-trains.component.css']
})

export class PublicAllTrainsComponent implements OnInit {
  public allTrainss:TrainModel[]=[];
  singleTrain!: TrainModel;
  //fromto!: string;
   //fromto="Delhi/Jaipur";
  constructor(private userService: UserService,private route:ActivatedRoute,private router:Router) {
    let fromTo=''+this.route.snapshot.paramMap.get('var1')+'/'+this.route.snapshot.paramMap.get('var2')
    this.userService.getTrainsFromTo(fromTo).subscribe((data:TrainModel[])=>{this.allTrainss=data;});
   }
  

  ngOnInit(): void {
    console.log(localStorage.getItem('loginchecker'))
   }
   

  onClick(ind:any)
  {
     this.singleTrain=this.allTrainss[ind];
     localStorage.setItem('tName',this.singleTrain.trainName);
     localStorage.setItem('tNumber',this.singleTrain.trainNumber);
     localStorage.setItem('sourcest',this.singleTrain.from);
     localStorage.setItem('dest',this.singleTrain.to);
     localStorage.setItem('boardTime',this.singleTrain.arrivalTime);
     localStorage.setItem('tcost',this.singleTrain.price);
     this.router.navigate(['user/booking'])

    // console.log(localStorage.getItem('tName'));
  }
  isloggedin=Number(localStorage.getItem('loginchecker'))
  
  
   
  

}
