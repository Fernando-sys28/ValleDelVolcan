import { Component, OnInit} from '@angular/core';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { CartService,CartItem } from '../header/cart.service';

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
    private viewportScroller: ViewportScroller,
    private cartService: CartService,
    
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

  addToCart(product: any) {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price
    };
    this.cartService.addToCart(cartItem);
  }
}
