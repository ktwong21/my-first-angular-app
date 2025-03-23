import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.type';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  http = inject(HttpClient);
  constructor() { }

  getStudents() {
    //const url = 'https://localhost:7021/api/Students';
    const url = 'https://school1-amf4dkemf3ckhrb9.canadaeast-01.azurewebsites.net/api/Students'
    return this.http.get<any>(url)
    /*
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((students) => {
      console.log(students);
    });
    */
  }

  addOrUdateStudent(student: Student) {
    //const url = 'https://localhost:7021/api/Students';
    const url = 'https://school1-amf4dkemf3ckhrb9.canadaeast-01.azurewebsites.net/api/Students'
    console.log("addOrUdateStudent: ", student);
    return this.http.post<any>(url, student);
  }
}
