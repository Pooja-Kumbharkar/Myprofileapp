import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HobbyComponent } from './hobby.component';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Maps from 'fusioncharts/fusioncharts.maps';
 
import * as India from 'fusioncharts/maps/fusioncharts.india';
import { FusionChartsModule } from 'angular-fusioncharts';
FusionChartsModule.fcRoot(FusionCharts, India, charts,Maps, FusionTheme);


describe('HobbyComponent', () => {
  let component: HobbyComponent;
  let fixture: ComponentFixture<HobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyComponent ],
      imports : [TableModule , FormsModule , FusionChartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
