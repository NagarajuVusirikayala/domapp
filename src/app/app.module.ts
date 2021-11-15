import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoorComponent } from './door/door.component';
import { DateComponent } from './date/date.component';
import { BtnComponent } from './btn/btn.component';
import { TestComponent } from './test/test.component';
import { PipesandServicesComponent } from './pipesand-services/pipesand-services.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeeDetailComponent } from './employeee-detail/employeee-detail.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    DoorComponent,
    DateComponent,
    BtnComponent,
    TestComponent,
    PipesandServicesComponent,
    EmployeeListComponent,
    EmployeeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
