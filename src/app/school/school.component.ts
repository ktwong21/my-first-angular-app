import { Component, inject, OnInit, signal } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { Student } from '../model/student.type';
import { catchError } from 'rxjs';
import { StudentItemComponent } from '../student-item/student-item.component';

@Component({
  selector: 'app-school',
  imports: [StudentItemComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent implements OnInit {
  schoolService = inject(SchoolService);
  students = signal<Array<Student>>([]);

  ngOnInit(): void {
    this.schoolService.getStudents().pipe(
      catchError((err) => { console.log(err); throw err; })
    ).subscribe((data) => {
      if (data.value){
        this.students.set(data.value);
      }      
    });
  } 

  refreshStudents() {   
    this.schoolService.getStudents().pipe(
      catchError((err) => { console.log(err); throw err; })
    ).subscribe((data) => {
      if (data.value){
        this.students.set(data.value);
      }      
    });
  }
}
