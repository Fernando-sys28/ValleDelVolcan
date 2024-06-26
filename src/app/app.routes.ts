import { Routes } from '@angular/router';
import { ProcesoPurificacionComponent} from './proceso-purificacion/proceso-purificacion.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReviewOrderComponent } from './review-order/review-order.component'
import { CuentaComponent } from './cuenta/cuenta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { WalletComponent } from './wallet/wallet.component';

import { CargarScriptsService } from './cargar-scripts.service';
import { MapaComponent } from './mapa/mapa.component';
import { StatusComponent } from './status/status.component';

export const routes: Routes = [
  {path: 'delivery', component: DeliveryFormComponent },
  { path: 'proceso-purificacion', component: ProcesoPurificacionComponent },
  {path: 'contactanos', component: ContactPageComponent },
  {path: 'delivery/summary', component: ReviewOrderComponent},
  {path: '', component: MainPageComponent},
  {path: 'cuenta', component: CuentaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'CargarScriptsService', component: CargarScriptsService},
  {path: 'mapa', component: MapaComponent},
  {path: 'status', component: StatusComponent},

];
