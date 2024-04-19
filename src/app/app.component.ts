import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})

export class AppComponent {
  title = 'app-pf-valle-volcan';

  constructor(private router: Router) { }

  navigateToDeliveryForm() {
    this.router.navigate(['/delivery-form']);
  }
}
