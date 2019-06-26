import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  industries = ['Finance', 'Education', 'Gaming', 'Insurance – Claims Management', 'Food Distribution', 'Professional Service', 'Pharmaceutical Substance Management', 'Pharmaceutical – Clinical Trials', 'Consumer Packaged Goods', 'Defense – Air & Sea', 'Publishing', 'Pharmaceutical – Clinical Trial Supply Chain'];

  constructor() { }

  ngOnInit() {
  }

}
