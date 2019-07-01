import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.css']
})
export class ChronologyComponent implements OnInit {
  
  @Input() dbState: boolean;
  @Input() techview: string;

  constructor() { }

  ngOnInit() {
  }

  toggle(id: string) {
    let panel = document.getElementById(id);

    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
