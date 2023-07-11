import { Component, OnInit } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit{
  constructor(private router : Router, private service : ResultServiceService) { }
  
  studentSearch(data: any) {
    this.service.searchRollNumber = data.rollNumber;
    this.router.navigate(['result']);
  }

  ngOnInit(): void {
  }
}
