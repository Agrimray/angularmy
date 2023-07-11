import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  constructor(private http:HttpClient) { 
  }
  url = "https://nodebackmy.azurewebsites.net/";
  searchRollNumber : string = '';
  editRollnumber:string = '';
  
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"student");
  }
  getStudent(){
    return this.http.get(this.url + "student/" + this.editRollnumber)
  }
  postStudent(data: any){
    return this.http.post(this.url + "student", data);
  }

  putStudent(data: any) {
    console.log(data);
    return this.http.put(this.url + "student/"+this.editRollnumber, data);
  }

  deleteStudent(value : string){
    return this.http.delete(this.url + "student/" + value);
  }

  getstudentSearch(value: string) {
    console.log(this.http.get(this.url + "student/" + value));
    return this.http.get(this.url + "student/" + value);

  }
}
