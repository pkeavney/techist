import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pete Keavney';
  techview = '';
  busInt = this.techview==="bi";
  coding = this.techview==="lang";
  dbState = this.techview==="db";
}
