import { CAMPARTS } from "./cam-mock";
import { CamParts } from "./cam-parts";
import { Component, OnInit } from "@angular/core";
import { CartServiceService } from "src/app/cart-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "camera",
  templateUrl: "./camera.component.html",
  styles: [],
})
export class CameraComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartServiceService
  ) {}

  ngOnInit() {}
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to cart successfully");
  }
  cdate = new Date();
  camParts: CamParts[] = CAMPARTS;

  totalCamera() {
    var sum = 0;
    for (let camPart of this.camParts) {
      sum += camPart.inStock;
    }
    return sum;
  }

  upqty(camPart) {
    if (camPart.qty < camPart.inStock) camPart.qty++;
  }

  downqty(camPart) {
    if (camPart.qty != 0) camPart.qty--;
  }
}
