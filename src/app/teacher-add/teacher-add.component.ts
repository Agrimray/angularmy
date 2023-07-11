import { Component } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {
  student: {
    rollNumber: number;
    studentName: string;
    dateOfBirth: string;
    score: number;
  };
  constructor(private location: Location,private router : Router, private service : ResultServiceService) { 
    this.student = {
      rollNumber: 0,
      studentName: '',
      dateOfBirth: '',
      score: 0
    };
  }
  
  addStudent(resData : any){
    this.service.postStudent(resData).subscribe((data)=>{
    });
    this.service.getStudents();
    //this.router.navigate(['tResult']);
    this.router.navigate(['tResult'], {skipLocationChange: true}).then(() => {
      //this.router.navigate(['tResult']);
      this.location.replaceState('/tResult');
      location.reload();
    });
  }
  ngOnInit(): void {
  }
}
