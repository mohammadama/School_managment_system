import { Component, OnInit,Input, Output ,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-activitie-child',
  templateUrl: './activitie-child.component.html',
  styleUrls: ['./activitie-child.component.css']
})
export class ActivitieChildComponent implements OnInit {

  // child for Input and output
  @Input() activitie = "swimming";
  @Output() newActivitieEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewActivitie(value:string){
    this.newActivitieEvent.emit(value)
  }

}
