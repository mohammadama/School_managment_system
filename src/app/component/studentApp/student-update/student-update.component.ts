import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentObg } from 'src/app/interfaces/student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  studentObg: studentObg;
  constructor(private route: ActivatedRoute,private router:Router ) {
    this.studentObg = new studentObg();
    this.route.params.subscribe(res => {
      this.studentObg.studentId = res['id'];
    });
  }

  ngOnInit(): void {
    const oldRecords= localStorage.getItem('studentlist');
    if(oldRecords !== null){
      const studentlist = JSON.parse(oldRecords);
      const currentstudent = studentlist.find((m: any) => m.studentId == this.studentObg.studentId);
      if(currentstudent !== undefined){
        this.studentObg.studentName = currentstudent.studentName;
        this.studentObg.studentCity = currentstudent.studentCity;
        this.studentObg.studentMobile = currentstudent.studentMobile;
      }
    }
  }
  updateStudent(){
    // debugger;
    const oldRecords= localStorage.getItem('studentlist');
    if(oldRecords !== null){
      const studentlist = JSON.parse(oldRecords);
      studentlist.splice(studentlist.findIndex((a:any)=>a.studentId == this.studentObg.studentId),1);
      studentlist.push(this.studentObg);
      localStorage.setItem('studentlist', JSON.stringify(studentlist));
    }
    this.router.navigateByUrl('/studentList');
  }


}
