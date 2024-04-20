import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-proceso-purificacion',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './proceso-purificacion.component.html',
  styleUrl: './proceso-purificacion.component.css'
})
export class ProcesoPurificacionComponent {
  mostrarImagen: boolean = false;

  mostrarCertificado() {
    this.mostrarImagen = true;
  }
  constructor(private router: Router) {
    // Escuchar eventos de navegación
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => window.scrollTo(0, 0));
}
}
