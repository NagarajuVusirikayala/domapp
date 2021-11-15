import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  

  @Input('parentData') public name!:any;
  @Output() public childEvent = new EventEmitter();

  date!: Date;
  
  getName()
  {
    alert("Raj")
  }

 
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey King!!!');
  }
  myFunction(){
  
    this.date=new Date();
   }
   logmessage(value: any){
     console.log(value)
   }

   }

