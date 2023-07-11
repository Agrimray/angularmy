import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherResultComponent } from './teacher-result/teacher-result.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentResultComponent } from './student-result/student-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherLoginComponent,
    TeacherResultComponent,
    TeacherEditComponent,
    TeacherAddComponent,
    StudentSearchComponent,
    StudentResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
