import { TestBed } from '@angular/core/testing';

import { UpdateprofessionalService } from './updateprofessional.service';

describe('UpdateprofessionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateprofessionalService = TestBed.get(UpdateprofessionalService);
    expect(service).toBeTruthy();
  });
});
