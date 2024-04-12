import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { RemovefriendService } from './removefriend.service';

describe('RemovefriendService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [TableModule , FormsModule]
  }));

  it('should be created', () => {
    const service: RemovefriendService = TestBed.get(RemovefriendService);
    expect(service).toBeTruthy();
  });
});
