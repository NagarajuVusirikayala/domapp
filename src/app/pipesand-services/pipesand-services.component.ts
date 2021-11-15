import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesand-services',
  templateUrl: './pipesand-services.component.html',
  styleUrls: ['./pipesand-services.component.css']
})
export class PipesandServicesComponent implements OnInit {
  public name = "Welcome to the Pipes in Angular!";
  public message = "Learn about Pipes in Angular";
  public person ={
    "firstName": "Naga",
    "lastName" : "Vusi"
  }
    public date = Date.now();

      
  constructor() { }

  ngOnInit(): void {
  }

}
