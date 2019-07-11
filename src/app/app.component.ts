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
  modling = this.techview==="mod"

  ngOnInit() {
    let toggler = document.getElementsByClassName("caret");
    let i;
    
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }  
  }

}
