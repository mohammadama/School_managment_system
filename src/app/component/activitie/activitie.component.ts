import { Component, OnInit } from '@angular/core';
// import { ActivitieChildComponent } from '../activitie-child/activitie-child.component';

@Component({
  selector: 'app-activitie',
  templateUrl: './activitie.component.html',
  styleUrls: ['./activitie.component.css']
})
export class ActivitieComponent implements OnInit {

  currentActivitie = "Playing football";
  activities = ['swimming','Gamming','fitness'];

  addActivitie(newActivitie:string){
    this.activities.push(newActivitie);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
