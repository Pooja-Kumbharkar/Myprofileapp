import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { FriendlistComponent } from './friendlist.component';

describe('FriendlistComponent', () => {
  let component: FriendlistComponent;
  let fixture: ComponentFixture<FriendlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendlistComponent ],
      imports : [TableModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
