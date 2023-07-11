import { Component, OnInit } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit{
  result : any ;
  constructor(private router: Router, private service: ResultServiceService) {
    console.log(this.service.searchRollNumber);
    this.service.getstudentSearch(this.service.searchRollNumber).subscribe((data) => {
      console.log(data);
      this.result = data;
    })
  }

  goBack() {
    this.router.navigate(['search']);
  }
  ngOnInit(): void {
  }
}
