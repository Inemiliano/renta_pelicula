import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  constructor(private router: Router) {}


  onCompras() {
    this.router.navigate(['/pago']);
  }
}

