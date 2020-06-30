import { cartParts } from "./../cart-parts";
import { CARTPARTS } from "./../cart-mock";
import { Component, OnInit } from "@angular/core";
import { CartServiceService } from "src/app/cart-service.service";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  items;
  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  idate = new Date();
  cartParts: cartParts[] = CARTPARTS;

  totalItems() {
    var sum = 0;
    for (let cartPart of this.cartParts) {
      sum += cartPart.inStock;
    }
    return sum;
  }

  upqty(cartPart) {
    if (cartPart.qty < cartPart.inStock) cartPart.qty++;
  }

  downqty(cartPart) {
    if (cartPart.qty != 0) {
      cartPart.qty--;
    }
  }
}
