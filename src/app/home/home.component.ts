import { Component, OnInit ,Input, OnChanges,SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{


  @Input() change:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes is', changes)
  }
  constructor() {
    console.log('constructor -> do not make any logic here')
  }


  ngOnInit() {
    console.log('ngOnInit -> Component Creating done');
  }
  // ngDoCheck(): void {
  //   console.log('Change Detection');
  // }
  ngAfterContentInit(): void {
      console.log('ngAfterContentInit -> Content Projection ng-content')
      // alert('welcome to student managment system');
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked -> Change detection + content projection');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit -> Invoked when components view has been fully initalized');
  }
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked -> Change detection + fully initalized for the components view')
  }
  ngOnDestroy(): void {
      console.log('Destroy -> before destroy the component')
  }
}
