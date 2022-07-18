import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/studentApp/student-list/student-list.component';
import { StudentNewComponent } from './component/studentApp/student-new/student-new.component';
import { StudentUpdateComponent } from './component/studentApp/student-update/student-update.component';
import { TeacherListComponent } from './component/teacherApp/teacher-list/teacher-list.component';
import { TeacherNewComponent } from './component/teacherApp/teacher-new/teacher-new.component';
import { TeacherUpdateComponent } from './component/teacherApp/teacher-update/teacher-update.component';
import { CourseListComponent } from './component/courseApp/course-list/course-list.component';
import { CourseNewComponent } from './component/courseApp/course-new/course-new.component';
import { CourseUpdateComponent } from './component/courseApp/course-update/course-update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentNewComponent,
    StudentUpdateComponent,
    TeacherListComponent,
    TeacherNewComponent,
    TeacherUpdateComponent,
    CourseListComponent,
    CourseNewComponent,
    CourseUpdateComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
