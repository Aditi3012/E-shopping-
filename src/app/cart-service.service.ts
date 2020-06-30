import { Injectable } from "@angular/core";
import { timingSafeEqual } from "crypto";

@Injectable({
  providedIn: "root",
})
export class CartServiceService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
