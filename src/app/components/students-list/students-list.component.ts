import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../services/students.service";
import {Student} from "../../models/student.model";

const MALE_FILTER = 'MALE';
const FEMALE_FILTER = 'FEMALE';
const ALL_FILTER = 'ALL';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  activeFilter: string = 'ALL';
  allStudents: Student[] = [];
  students: Student[] = [];
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      {
        next: (students) => {
          this.allStudents = students;
          this.students = [... this.allStudents];
        }
      }
    )
  }

  isMaleFilterActive(): boolean {
    return this.activeFilter === MALE_FILTER;
  }

  isFemaleFilterActive(): boolean {
    return this.activeFilter === FEMALE_FILTER;
  }
  toggleMaleFilter(): void {
    if (!this.isMaleFilterActive()) {
      this.activeFilter = MALE_FILTER;
    } else {
      this.activeFilter = ALL_FILTER;
    }
    this.filterStudents();
  }
  toggleFemaleFilter(): void {
    if (!this.isFemaleFilterActive()) {
      this.activeFilter = FEMALE_FILTER;
    } else {
      this.activeFilter = ALL_FILTER;
    }
    this.filterStudents();
  }

  filterStudents(): void {
    if (this.isMaleFilterActive()) {
      this.students = this.allStudents.filter((student: Student) => student.gender === 'Male');
    } else if (this.isFemaleFilterActive()) {
      this.students = this.allStudents.filter((student: Student) => student.gender === 'Female');
    } else {
      this.students = [... this.allStudents];
    }
  }
}
