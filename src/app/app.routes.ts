import { Routes } from '@angular/router';
import { ProcesoPurificacionComponent} from './proceso-purificacion/proceso-purificacion.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  {path: 'delivery', component: DeliveryFormComponent },
  { path: 'proceso-purificacion', component: ProcesoPurificacionComponent },
  {path: 'contactanos', component: ContactPageComponent },
  {path: '', component: MainPageComponent},
];
