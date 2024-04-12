import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';

describe('SignupService', () => {
  let service: SignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ TableModule , FormsModule]
    });
    service = TestBed.get(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
