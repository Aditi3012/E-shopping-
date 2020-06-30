import { Routes, ActivatedRoute } from "@angular/router";
import { CartServiceService } from "./../../../cart-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cam-menu",
  templateUrl: "./cam-menu.component.html",
})
export class CamMenuComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartServiceService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to cart successfully");
  }

  ngOnInit() {}
}
