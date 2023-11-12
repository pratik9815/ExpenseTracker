import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExpenseTracker';

  audioObj = new Audio();
  rangeValue:number = 100;

  constructor()
  {

  }

  updateRangeValue(event:any)
  {
    this.rangeValue = Math.round(event.target.value * 100);
  }
}
