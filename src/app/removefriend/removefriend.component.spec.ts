import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { RemovefriendComponent } from './removefriend.component';

describe('RemovefriendComponent', () => {
  let component: RemovefriendComponent;
  let fixture: ComponentFixture<RemovefriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovefriendComponent ],
      imports : [TableModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovefriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
