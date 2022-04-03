import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";
import {MatDialog} from "@angular/material/dialog";
import {StudentContactDialogComponent} from "../student-contact-dialog/student-contact-dialog.component";

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input()
  student: Student;
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  contactStudent(): void {
    this.matDialog.open(StudentContactDialogComponent, {
      data: this.student
    });
  }

}
