import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateModel: Date;
  title = 'school_system';

  constructor() {

    this.dateModel = new Date();
  }
}
