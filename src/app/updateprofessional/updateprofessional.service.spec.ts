import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { UpdateprofessionalService } from './updateprofessional.service';

describe('UpdateprofessionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [TableModule , FormsModule]
  }));

  it('should be created', () => {
    const service: UpdateprofessionalService = TestBed.get(UpdateprofessionalService);
    expect(service).toBeTruthy();
  });
});
