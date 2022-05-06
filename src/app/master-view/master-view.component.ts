import { Component, OnInit } from '@angular/core';
import { JSONNorthwindCustomersService } from '../services/json-northwind-customers.service';
import { JSONNorthwindOrdersService } from '../services/json-northwind-orders.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public jSONNorthwindCustomersCustomers: any = null;
  public jSONNorthwindOrdersOrders: any = null;

  constructor(
    private jSONNorthwindCustomersService: JSONNorthwindCustomersService,
    private jSONNorthwindOrdersService: JSONNorthwindOrdersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.jSONNorthwindCustomersService.getCustomers().subscribe(data => this.jSONNorthwindCustomersCustomers = data);
    this.jSONNorthwindOrdersService.getOrders().subscribe(data => this.jSONNorthwindOrdersOrders = data);
  }
}
