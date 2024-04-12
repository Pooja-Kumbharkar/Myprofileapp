import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { UpdatepersonalComponent } from './updatepersonal.component';

describe('UpdatepersonalComponent', () => {
  let component: UpdatepersonalComponent;
  let fixture: ComponentFixture<UpdatepersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepersonalComponent ],
       imports : [FormsModule, TableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
