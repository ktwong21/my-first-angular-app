import { Component, inject, input, output } from '@angular/core';
import { Student } from '../model/student.type';
import { FormsModule } from '@angular/forms';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-student-item',
  imports: [FormsModule],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})
export class StudentItemComponent {
  student = input.required<Student>();
  schoolService = inject(SchoolService);
  studentUpdated = output<Student>();

  studentNameChanged(id: number, name: string) {  
    console.log(`Student with id ${id} changed name to ${name}`);
    this.schoolService
      .addOrUdateStudent({ id: id, name: name })
      .subscribe(() => {
        console.log("Student updated");
        this.studentUpdated.emit(this.student());
      });
  }
}
