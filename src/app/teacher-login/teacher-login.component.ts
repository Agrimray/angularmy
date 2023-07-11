import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  
  constructor(private router : Router) { }

  loginTeacher(data : any) {
      if ("123" === data.password) {
        this.router.navigate(['tResult'])
      }
  }
  ngOnInit(): void {
  }

}
