import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  systems = ['AmlEdge', 'CMF', 'AmlXp', 'Metridoc', 'GBS', 'DM-ICMS', 'Mattingly', 'Rate Your Resources', 'ESM', 'Investigator Tracking', 'Patient Tracking', 'SAE', 'CPG', 'SNAP-CPG', 'ICC Manuscript Tracker', 'Dynaplan Ledger', 'Parts Component Tracker', 'Trunkline Usage Logger', 'Client Configurator ', 'Integrated Supply chain', 'Phinet'];

  constructor() { }

  ngOnInit() {
  }

}
