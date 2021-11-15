import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayName = false;
  public name = true;
  public color ="red";
  public vehicles = ["tata", "nano", "Mahendra"]
  

  constructor() { }

  ngOnInit(): void {
  }
}
