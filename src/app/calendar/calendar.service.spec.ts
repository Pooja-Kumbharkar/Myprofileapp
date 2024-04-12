import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CalendarService } from './calendar.service';
import { DialogModule } from "primeng/dialog";


describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [TableModule , FormsModule , DialogModule]
  }));

  it('should be created', () => {
    const service: CalendarService = TestBed.get(CalendarService);
    expect(service).toBeTruthy();
  });
});
