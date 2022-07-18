import { Component, OnInit } from '@angular/core';
import { studentObg } from 'src/app/interfaces/student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  myChange = 'Not Change';
  studentlist: studentObg [];
  constructor() {
    this.studentlist = [];

    // for OnDestroy
    setTimeout(() => {
      this.myChange='';
    }, 3000);
  }

  ngOnInit(): void {
    const records = localStorage.getItem('studentlist');
    if (records !== null){
      this.studentlist = JSON.parse (records);
    }
  }
  delete(id:any){
    const oldRecords= localStorage.getItem('studentlist');
    if(oldRecords !== null){
      const studentlist = JSON.parse(oldRecords);
      studentlist.splice(studentlist.findIndex((a:any)=>a.studentId == id),1);
      localStorage.setItem('studentlist', JSON.stringify(studentlist));
    }
    const records = localStorage.getItem('studentlist');
    if (records !== null){
      this.studentlist = JSON.parse (records);
    }

  }

}
