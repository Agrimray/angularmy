import { Component, OnInit } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit{
  data : any;
  editForm : any;
  constructor(private router : Router, public service : ResultServiceService) {
    this.service.getStudent().subscribe((data: any)=>{
      this.data = data;
      this.initForm()
    });
  }
  initForm(){
    this.editForm = new FormGroup({
      rollNumber : new FormControl(this.data.rollNumber),
      studentName : new FormControl(this.data.studentName),
      dateOfBirth : new FormControl(this.data.dateOfBirth),
      score : new FormControl(this.data.score)
    });
  }
  editStudent(){    
    this.service.putStudent(this.editForm.value).subscribe((data)=>{     
    });
    this.service.getStudents();
    //this.router.navigate(['tResult']);
    this.router.navigate(['tResult'], {skipLocationChange: true}).then(() => {
      this.router.navigate(['tResult']);
    });
  }
  goBack(){
    this.router.navigate(['tResult']);
  }
  ngOnInit(): void {
    
  }

}
