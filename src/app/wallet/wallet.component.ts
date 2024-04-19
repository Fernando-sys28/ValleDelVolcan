import { Component } from '@angular/core';

import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {

  constructor( private _CargarScripts: CargarScriptsService){

    _CargarScripts.Carga(["wallet"]);
  }
}
