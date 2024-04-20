import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem, CartService } from './cart.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItemsCount: number = 0;
  cartItems: CartItem[] = []; // Declara la propiedad cartItems aquí
  constructor(private cartService: CartService) {
    // Actualiza tanto cartItems como cartItemsCount cuando cambien los elementos del carrito
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items; // Actualiza cartItems
      this.cartItemsCount = items.length; // Actualiza cartItemsCount
    });
  }
}

