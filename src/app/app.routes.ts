import { Routes } from '@angular/router';
import { ProcesoPurificacionComponent} from './proceso-purificacion/proceso-purificacion.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  { path: 'proceso-purificacion', component: ProcesoPurificacionComponent },
  { path: 'delivery-form', component: DeliveryFormComponent },
  {path: '', component: HomeComponent},
  // Other existing routes...
];
