import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContactDialogComponent } from './student-contact-dialog.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Student} from "../../models/student.model";

describe('StudentContactDialogComponent', () => {
  let component: StudentContactDialogComponent;
  let fixture: ComponentFixture<StudentContactDialogComponent>;

  const mockStudent: Student = {
    id: 1,
    gender: 'Male',
    email: 'mock@email.naf',
    university: 'Angular University',
    first_name: 'Monsieur',
    last_name: 'Mock',
    dob: new Date(2000, 1, 1)
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentContactDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockStudent },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
