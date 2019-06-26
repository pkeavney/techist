import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  skillset = ['Problem Analysis', 'Solution Design', 'Software Development', 'Testing', 'Business Integration', 'Data Architecture', 'System Administration' ];

  selcted = '';

  constructor() { }

  ngOnInit() { }

  showme(event: KeyboardEvent) {
    this.selcted = (<HTMLUListElement>event.target).innerHTML;
  }
}
