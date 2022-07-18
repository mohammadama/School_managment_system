import { Component, OnInit } from '@angular/core';
import { teacherObg } from 'src/app/interfaces/teacher';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teacherlist: teacherObg [];
  constructor() {
    this.teacherlist = [];
  }

  ngOnInit(): void {
    // debugger;
    const records = localStorage.getItem('teacherlist');
    if (records != null){
      this.teacherlist = JSON.parse (records);
    }
  }
  delete(id:any){
    // debugger;
    const oldRecords= localStorage.getItem('teacherlist');
    if(oldRecords !== null){
      const teacherlist = JSON.parse(oldRecords);
      teacherlist.splice(teacherlist.findIndex((a:any)=>a.teacherId == id),1);
      localStorage.setItem('teacherlist', JSON.stringify(teacherlist));
    }
    const records = localStorage.getItem('teacherlist');
    if (records !== null){
      this.teacherlist = JSON.parse (records);
    }
  }


}
