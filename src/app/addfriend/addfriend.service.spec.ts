import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AddfriendService } from './addfriend.service';

describe('AddfriendService', () => {
  let service: AddfriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports : [TableModule , FormsModule]

    });
    service = TestBed.get(AddfriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
