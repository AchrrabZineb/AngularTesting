import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-student-contact-dialog',
  templateUrl: './student-contact-dialog.component.html',
  styleUrls: ['./student-contact-dialog.component.css']
})
export class StudentContactDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public student: Student) { }

  ngOnInit(): void {
  }

}
