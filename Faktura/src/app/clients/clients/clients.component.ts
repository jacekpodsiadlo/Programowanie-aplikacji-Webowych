import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Clients';
  showClients = true;
  clientsList = [
    'Coca-Cola',
    'Facebook',
    'Twitter',
    'PLL LOT',
    'Pepsi'
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onShowListClick(): void {
    this.showClients = !this.showClients;
  }
}
