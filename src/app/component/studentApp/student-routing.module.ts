import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent} from './student-new/student-new.component';
import { StudentUpdateComponent} from './student-update/student-update.component';

const routes: Routes = [
  {path:'studentList',component:StudentListComponent},
  {path:'studentNew',component:StudentNewComponent},
  {path:'student/studentUpdate/:id',component:StudentUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
