import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the JomeApp';

  public message ="";

  public name = "Hey Naga!!!!!";

  getName()
  {
    alert("King!!!")
  }
  
  
}
