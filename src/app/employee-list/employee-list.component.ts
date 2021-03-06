import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  public employees:{id:number; name:string; age:number}[] =[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this. _employeeService.getEmployees();
  }

}
