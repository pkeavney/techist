import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  database = ['Oracle', 'Sybase', 'Watcom', 'MongoDB', 'H2', 'Focus', 'PowerBase', 'Dbase-III', 'MS Access', 'SQLServer', 'Postgres', 'Paradox', 'MySql', 'Ingres', 'Pointbase', 'PF-File'];

  constructor() { }

  ngOnInit() {
  }

}
