import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() busInt: boolean;
  @Input() coding: boolean;
  @Input() dbState: boolean;
  @Input() modling: boolean;

  constructor() { }

  ngOnInit() {
  }

}
