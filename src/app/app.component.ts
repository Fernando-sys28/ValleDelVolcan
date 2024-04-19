import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-pf-valle-volcan';

  constructor(private router: Router) { }

  navigateToDeliveryForm() {
    this.router.navigate(['/delivery-form']);
  }
}
