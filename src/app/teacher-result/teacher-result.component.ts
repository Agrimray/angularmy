import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultServiceService} from '../services/result-service.service';

@Component({
  selector: 'app-teacher-result',
  templateUrl: './teacher-result.component.html',
  styleUrls: ['./teacher-result.component.css']
})
export class TeacherResultComponent {

  results : any;
  constructor(private router : Router, private service : ResultServiceService) {
    this.fetchData();
  }
  fetchData(){
    this.service.getStudents().subscribe((data) => {
      console.log(data);
      this.results = data;
    });
  }


  getToAdd(){
    this.router.navigate(['tAdd'])
  }
  getEditResult(data : any){
    this.service.editRollnumber = data;
    this.router.navigate(['tEdit'])
  }

  deleteElement(data: string){
    this.service.deleteStudent(data).subscribe(()=>{
      this.fetchData();
    });
  }
}
