import { Component } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent {
  orderList: string[] = [];
  timer;
  orderCount: number = 1;

  startWorkday(): void {
    this.timer = setInterval(() => {
      const message: string = `Order ${this.orderCount}`
    })
  }
  stopWorkDay(): void { }

}
