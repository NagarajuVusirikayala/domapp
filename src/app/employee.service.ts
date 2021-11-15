import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() { }

  getEmployees(){
    return[
      {"id":1, "name":"Raj", "age":25},
    {"id":2, "name":"Srinidhi", "age":23},
    {"id":3, "name":"buddi", "age":0}
    ];
  }
}
