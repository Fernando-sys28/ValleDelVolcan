import { Component, OnInit} from '@angular/core';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    // Escucha los cambios de fragmentos
    this.route.fragment.pipe(
      filter(fragment => !!fragment)
    ).subscribe(fragment => {
      // Espera al ciclo de vida del navegador para que complete la navegación
      // Puede requerir ajustes dependiendo de tu aplicación
      setTimeout(() => this.viewportScroller.scrollToAnchor(fragment!), 100);
    });
  }
}