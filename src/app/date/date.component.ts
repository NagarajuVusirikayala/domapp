import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  mydate = Date.now();
  public name = "World!";
  public myId = "testid";
  
  constructor() { }

  ngOnInit(): void {
  }

}
