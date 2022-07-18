import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courseObg } from 'src/app/interfaces/course';
import { studentObg } from 'src/app/interfaces/student'
@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  studentlist:studentObg[];
  courseObg: courseObg;
  constructor(private route: ActivatedRoute,private router:Router ) {
    this.courseObg = new courseObg();
    this.route.params.subscribe( res =>{
      this.courseObg.courseId = res['id']
    });

    this.studentlist =[];
  }

  ngOnInit(): void {
    const oldRecords= localStorage.getItem('courselist');
    if(oldRecords !== null){
      const courselist = JSON.parse(oldRecords);
      const currentcourse = courselist.find((m: any) => m.courseId == this.courseObg.courseId);
      if(currentcourse !== undefined){
        this.courseObg.courseName = currentcourse.courseName;
        this.courseObg.courseStudent = currentcourse.courseStudent;
      }
    }

    const records = localStorage.getItem('studentlist');
    if (records !== null){
      this.studentlist = JSON.parse (records);
    }
  }
  updateCourse(){
    // debugger;
    const oldRecords= localStorage.getItem('courselist');
    if(oldRecords !== null){
      const courselist = JSON.parse(oldRecords);
      courselist.splice(courselist.findIndex((a:any)=>a.courseId == this.courseObg.courseId),1);
      courselist.push(this.courseObg);
      localStorage.setItem('courselist', JSON.stringify(courselist));
    }
    this.router.navigateByUrl('/courseList');
  }


}
