import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

import { StudentsListComponent } from './students-list.component';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;
  const fakeStudentsService = jasmine.createSpyObj('StudentsService', ['getStudents']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListComponent ],
      providers: [{
        provide: StudentsService,
        useValue: fakeStudentsService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fakeStudentsService.getStudents.and.returnValue(of([
      {
        "id": 1,
        "first_name": "Noell",
        "last_name": "Rolse",
        "email": "nrolse0@lycos.com",
        "gender": "Female",
        "university": "University of Virginia",
        "dob": new Date("09/14/1996")
      }, {
        "id": 2,
        "first_name": "Spence",
        "last_name": "Tomaszek",
        "email": "stomaszek1@vimeo.com",
        "gender": "Male",
        "university": "Universidad Estatal de BolÃ­var",
        "dob": new Date("08/11/1997")
      }, {
        "id": 3,
        "first_name": "Adena",
        "last_name": "Stocky",
        "email": "astocky2@chron.com",
        "gender": "Female",
        "university": "University of Hargeisa",
        "dob": new Date("04/08/1997")
      }, {
        "id": 4,
        "first_name": "AAAA",
        "last_name": "Tomaszek",
        "email": "Atomaszek1@vimeo.com",
        "gender": "Male",
        "university": "Universidad Estatal de BolÃ­var",
        "dob": new Date("08/12/1999")
      }, {
        "id": 5,
        "first_name": "Amy",
        "last_name": "Petrou",
        "email": "apetrou3@google.de",
        "gender": "Non-binary",
        "university": "Academy of Economics \"Dimitur A. Tscenov\"",
        "dob": new Date("11/11/1997")
      }

    ]));
    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all students when activeFilter is ALL', ()=> {
    component.filterStudents()
    expect(component.students.length).toEqual(5)
    expect(component.students.map((student) =>student.gender)).toEqual(['Female', 'Male', 'Female', 'Male', 'Non-binary'])
  });
  
  it('should filter male',()=>{
    component.toggleMaleFilter()
    expect(component.activeFilter).toEqual('MALE')
    expect(component.students.map((student) =>student.gender)).toEqual(['Male', 'Male'])
  });

  it('should filter female',()=>{
    component.toggleFemaleFilter()
    expect(component.activeFilter).toEqual('FEMALE')
    expect(component.students.map((student) =>student.gender)).toEqual(['Female', 'Female'])
  });

});
