import { Routes } from '@angular/router';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  { path: 'delivery-form', component: DeliveryFormComponent },
  {path: '', component: HomeComponent},
  // Other existing routes...
];
