import { Routes } from '@angular/router';
import { ProcesoPurificacionComponent} from './proceso-purificacion/proceso-purificacion.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
<<<<<<< HEAD
  { path: 'proceso-purificacion', component: ProcesoPurificacionComponent },
  { path: 'delivery-form', component: DeliveryFormComponent },
  {path: '', component: HomeComponent},
  // Other existing routes...
=======
  {path: 'delivery', component: DeliveryFormComponent },
  {path: 'contactanos', component: ContactPageComponent },
  {path: '', component: MainPageComponent},
>>>>>>> bf4495f (parte 2)
];
