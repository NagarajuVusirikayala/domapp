import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeee-detail',
  templateUrl: './employeee-detail.component.html',
  styleUrls: ['./employeee-detail.component.css']
})
export class EmployeeeDetailComponent implements OnInit {
  public employees:{id:number;name:string;age:number}[] =[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
