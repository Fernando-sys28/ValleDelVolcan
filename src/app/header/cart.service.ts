import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }
}
