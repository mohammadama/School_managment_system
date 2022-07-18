import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {studentObg} from 'src/app/interfaces/student'

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {
  // dateModel: Date;
  studentObg: studentObg;
  constructor(private router:Router) {
    this.studentObg = new studentObg();

    // this.dateModel = new Date();
  }

  ngOnInit(): void {
  }


  getNewStudentId(){
    // debugger;
    const oldRecords= localStorage.getItem('studentlist');
    if(oldRecords !== null){
      const studentlist = JSON.parse(oldRecords);
      return studentlist.length + 1;
    } else {
      return 1;
    }
  }

  saveStudent(){
    // debugger;
    const latestId = this.getNewStudentId();
    this.studentObg.studentId = latestId;
    const oldRecords= localStorage.getItem('studentlist');
    if(oldRecords !== null){
      const studentlist = JSON.parse(oldRecords);
      studentlist.push(this.studentObg);
      localStorage.setItem('studentlist', JSON.stringify(studentlist));
    } else {
      const studentArr = [];
      studentArr.push(this.studentObg);
      localStorage.setItem('studentlist', JSON.stringify(studentArr));
    }
    this.router.navigateByUrl('/studentList');
  }

}
