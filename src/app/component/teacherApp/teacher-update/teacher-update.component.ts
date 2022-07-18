import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherObg } from 'src/app/interfaces/teacher';
import { courseObg } from 'src/app/interfaces/course'

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {
  courselist:courseObg[];
  teacherObg: teacherObg;
  constructor(private route: ActivatedRoute,private router:Router ) {
    this.teacherObg = new teacherObg();
    this.route.params.subscribe(res => {
      this.teacherObg.teacherId = res['id']
    });

    this.courselist =[];
  }

  ngOnInit(): void {
    const oldRecords= localStorage.getItem('teacherlist');
    if(oldRecords !== null){
      const teacherlist = JSON.parse(oldRecords);
      const currentteacher = teacherlist.find((m: any) => m.teacherId == this.teacherObg.teacherId);
      if(currentteacher !== undefined){
        this.teacherObg.teacherName = currentteacher.teacherName;
        this.teacherObg.teacherCity = currentteacher.teacherCity;
        this.teacherObg.teacherMobile = currentteacher.teacherMobile;
        this.teacherObg.teacherCourse = currentteacher.teacherCourse;
      }
    }
  }
  updateTeacher(){
    // debugger;
    const oldRecords= localStorage.getItem('teacherlist');
    if(oldRecords !== null){
      const teacherlist = JSON.parse(oldRecords);
      teacherlist.splice(teacherlist.findIndex((a:any)=>a.teacherId == this.teacherObg.teacherId),1);
      teacherlist.push(this.teacherObg);
      localStorage.setItem('teacherlist', JSON.stringify(teacherlist));
    }
    this.router.navigateByUrl('/teacherList');
  }


}
