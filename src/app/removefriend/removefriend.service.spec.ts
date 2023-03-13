import { TestBed } from '@angular/core/testing';

import { RemovefriendService } from './removefriend.service';

describe('RemovefriendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemovefriendService = TestBed.get(RemovefriendService);
    expect(service).toBeTruthy();
  });
});
