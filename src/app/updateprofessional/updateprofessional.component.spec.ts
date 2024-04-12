import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Table, TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { UpdateprofessionalComponent } from './updateprofessional.component';

describe('UpdateprofessionalComponent', () => {
  let component: UpdateprofessionalComponent;
  let fixture: ComponentFixture<UpdateprofessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprofessionalComponent ],
      imports : [TableModule , FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
