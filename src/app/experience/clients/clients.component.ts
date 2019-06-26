import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = ['Regulatory Data Corporation(RDC) / Vista', 'Penn Libraries – University of Pennsylvania', 'Lightning Poker/Lightning Gaming', 'Intracorp – Cigna Corp', 'Chariot Solutions', 'Towers Perrin', 'Emax/SciQuest', 'CorningPact/Covance', 'Sales Technologies – D&B', 'Tele-Dynamics - Hamiltion Standard Electronics – UTC', 'International Computaprint Corporation', 'Innovative Supply Solutions'];
  roles = ['Production Coordinator', 'LAN Administrator', 'Implementation Specialist', 'Technical Manager', 'Systems Analyst', 'Systems Developer', 'Java Developer', 'Client Service Rep', 'Programming Aid', 'Product Manager', 'Software Engineer', 'Python Developer'];
  platforms = [];

  constructor() { }

  ngOnInit() {
  }

}
