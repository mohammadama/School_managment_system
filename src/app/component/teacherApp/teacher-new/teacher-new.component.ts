import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teacherObg } from 'src/app/interfaces/teacher'
import { courseObg } from 'src/app/interfaces/course'
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-teacher-new',
  templateUrl: './teacher-new.component.html',
  styleUrls: ['./teacher-new.component.css']
})
export class TeacherNewComponent implements OnInit {

  courselist:courseObg[];
  teacherObg: teacherObg;

  constructor(private router:Router) {
    this.teacherObg = new teacherObg();

    this.courselist =[];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('courselist');
    if (records !== null){
      this.courselist = JSON.parse (records);
    }
  }


  getNewTeacherId(){
    // debugger;
    const oldRecords= localStorage.getItem('teacherlist');
    if(oldRecords !== null){
      const teacherlist = JSON.parse(oldRecords);
      return teacherlist.length + 1;
    } else {
      return 1;
    }
  }

  saveTeacher(){
    // debugger;
    const latestId = this.getNewTeacherId();
    this.teacherObg.teacherId = latestId;
    const oldRecords= localStorage.getItem('teacherlist');
    if(oldRecords !== null){
      const teacherlist = JSON.parse(oldRecords);
      teacherlist.push(this.teacherObg);
      localStorage.setItem('teacherlist', JSON.stringify(teacherlist));
    } else {
      const teacherArr = [];
      teacherArr.push(this.teacherObg);
      localStorage.setItem('teacherlist', JSON.stringify(teacherArr));
    }
    this.router.navigateByUrl('/teacherList');
  }


}
