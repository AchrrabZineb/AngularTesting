import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardComponent } from './student-card.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCardComponent ],
      imports: [MatDialogModule]
    }).overrideComponent(StudentCardComponent, {
      remove: {
         templateUrl: './student-card.component.html'
      },
      add: {
         template: ''
      }
   })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    component.matDialog = {
      open: jasmine.createSpy('dialog.open')
    } as unknown as MatDialog;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the contact dialog', () =>{
    component.contactStudent();
    expect(component.matDialog.open).toHaveBeenCalled();
  });
});
