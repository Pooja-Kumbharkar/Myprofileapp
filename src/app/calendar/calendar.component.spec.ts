import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';
import { DialogModule } from "primeng/dialog";


describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports : [TableModule , FormsModule , DialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
