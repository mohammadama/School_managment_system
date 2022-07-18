import { Component, OnInit } from '@angular/core';
import { courseObg } from 'src/app/interfaces/course';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courselist: courseObg [];
  constructor() {
    this.courselist = [];
  }

  ngOnInit(): void {
    // debugger;
    const records = localStorage.getItem('courselist');
    if (records !== null){
      this.courselist = JSON.parse (records);
    }
  }
  delete(id:any){
    // debugger;
    const oldRecords= localStorage.getItem('courselist');
    if(oldRecords !== null){
      const courselist = JSON.parse(oldRecords);
      courselist.splice(courselist.findIndex((a:any)=>a.courseId == id),1);
      localStorage.setItem('courselist', JSON.stringify(courselist));
    }
    const records = localStorage.getItem('courselist');
    if (records != null){
      this.courselist = JSON.parse (records);
    }
  }

}
