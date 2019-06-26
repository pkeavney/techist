import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  language = ['Java', 'Groovy', 'Javascript', 'PL/SQL', 'Jython', 'AppleBasic', 'Bash Shell', 'OS/JCL', 'PowerBuilder', 'PHP', 'SQL', 'Korn Shell', 'Python'];

  constructor() { }

  ngOnInit() {
  }

}
