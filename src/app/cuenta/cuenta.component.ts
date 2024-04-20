import { Component, OnInit } from '@angular/core';

import { CargarScriptsService } from '../cargar-scripts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent implements OnInit{

  constructor( private _CargarScripts: CargarScriptsService){

    
  }
  ngOnInit(): void {
    this._CargarScripts.Carga(["cuenta"]);
  }
}

