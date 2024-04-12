import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { UpdateserviceService } from './updateservice.service';

describe('UpdateserviceService', () => {
  let service: UpdateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [TableModule , FormsModule]
    });
    service = TestBed.get(UpdateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
