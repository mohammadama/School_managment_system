import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseUpdateComponent } from './component/courseApp/course-update/course-update.component';
import { CourseNewComponent } from './component/courseApp/course-new/course-new.component';
import { CourseListComponent } from './component/courseApp/course-list/course-list.component';
import { TeacherUpdateComponent } from './component/teacherApp/teacher-update/teacher-update.component';
import { TeacherNewComponent } from './component/teacherApp/teacher-new/teacher-new.component';
import { TeacherListComponent } from './component/teacherApp/teacher-list/teacher-list.component';
// import { StudentUpdateComponent } from './component/studentApp/student-update/student-update.component';
// import { StudentNewComponent } from './component/studentApp/student-new/student-new.component';
// import { StudentListComponent } from './component/studentApp/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Home rote //
  {path:'', component:HomeComponent},
  //  student route //
  {path:"student",loadChildren:()=>import('./component/studentApp/student.module')
  .then(mod=>mod.StudentModule)
  },
  // {path:'studentList', component:StudentListComponent},
  // {path:'studentNew', component:StudentNewComponent},
  // {path:'studentUpdate/:id', component:StudentUpdateComponent},

  //  teacher route //
  {path:'teacherList', component:TeacherListComponent},
  {path:'teacherNew', component:TeacherNewComponent},
  {path:'teacherUpdate/:id', component:TeacherUpdateComponent},

  //  course route //
  {path:'courseList', component:CourseListComponent},
  {path:'courseNew', component:CourseNewComponent},
  {path:'courseUpdate/:id', component:CourseUpdateComponent},

  // Not found route //
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
