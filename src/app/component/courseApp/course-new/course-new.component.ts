import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseObg } from 'src/app/interfaces/course'
import { studentObg } from 'src/app/interfaces/student'

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.css']
})
export class CourseNewComponent implements OnInit {
  studentlist:studentObg[];
  courseObg: courseObg;
  constructor(private router:Router) {
    this.courseObg = new courseObg();

    this.studentlist =[];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('studentlist');
    if (records !== null){
      this.studentlist = JSON.parse (records);
    }
  }

  getNewCourseId(){
    // debugger;
    const oldRecords= localStorage.getItem('courselist');
    if(oldRecords !== null){
      const courselist = JSON.parse(oldRecords);
      return courselist.length + 1;
    } else {
      return 1;
    }
  }

  saveCourse(){
    // debugger;
    const latestId = this.getNewCourseId();
    this.courseObg.courseId = latestId;
    const oldRecords= localStorage.getItem('courselist');
    if(oldRecords !== null){
      const courselist = JSON.parse(oldRecords);
      courselist.push(this.courseObg);
      localStorage.setItem('courselist', JSON.stringify(courselist));
    } else {
      const courseArr = [];
      courseArr.push(this.courseObg);
      localStorage.setItem('courselist', JSON.stringify(courseArr));
    }
    this.router.navigateByUrl('/courseList');
  }

}
