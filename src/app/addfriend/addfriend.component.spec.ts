import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddfriendComponent } from './addfriend.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
describe('AddfriendComponent', () => {
  let component: AddfriendComponent;
  let fixture: ComponentFixture<AddfriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfriendComponent ],
      imports : [TableModule , FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
