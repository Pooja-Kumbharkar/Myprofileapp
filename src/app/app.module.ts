import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdatepersonalComponent } from './updatepersonal/updatepersonal.component';
import { UpdateprofessionalComponent } from './updateprofessional/updateprofessional.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { RemovefriendComponent } from './removefriend/removefriend.component';
import { ProfileComponent } from './profile/profile.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule}  from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CalendarComponent } from './calendar/calendar.component';

import { FusionChartsModule } from "angular-fusioncharts";

import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Maps from 'fusioncharts/fusioncharts.maps';
 

// Load WorldMap definition
import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as India from 'fusioncharts/maps/fusioncharts.india';
import { LoginUser } from './common/util/loginusers';
import { HeaderComponent } from './header/header.component';
import { ShoweventsComponent } from './calendar/showevents/showevents.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, India, charts,Maps,World, FusionTheme);




@NgModule({

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  declarations: [
    AppComponent,
    HobbyComponent,
    HomeComponent,
    ProfileComponent,
    FriendlistComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    UpdatepersonalComponent,
    UpdateprofessionalComponent,
    AddfriendComponent,
    RemovefriendComponent,
    HeaderComponent,
    CalendarComponent,
    ShoweventsComponent  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    MatToolbarModule,
    MatButtonToggleModule, 
    FormsModule,
    InputTextModule,
    FusionChartsModule,
    TableModule,
    ToastAllModule,
    DropDownButtonAllModule,
    DropDownListAllModule,
    TreeViewModule,
    MultiSelectAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    ToolbarAllModule,
    ContextMenuAllModule,
    ButtonAllModule,
    CheckBoxAllModule,
    SwitchAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    NumericTextBoxAllModule,
    TextBoxAllModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    ScheduleAllModule


  ],
  providers: [DayService, WeekService, MonthService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
