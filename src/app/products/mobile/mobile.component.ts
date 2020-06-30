import { ComServiceService } from "./../../services/com-service.service";
//import { MOBPARTS } from "./mock";
import { MobParts } from "./mob-parts";

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "mobile",
  templateUrl: "./mobile.component.html",
  styles: []
})
export class MobileComponent implements OnInit {
  constructor(private comServiceService: ComServiceService) {}

  @Input() myNewNumber: number;
  mobParts: MobParts[];
  ngOnInit() {
    // from database
    // let comServiceService = new ComServiceService();
    //this.mobParts = this.comServiceService.getMobParts();
    // from providers

    this.comServiceService
      .getMobParts()
      .subscribe(data => (this.mobParts = data));
  }
  cdate = new Date();

  //from mock.ts
  // mobParts: MobParts[] = MOBPARTS;

  totalProducts() {
    var sum = 0;
    if (Array.isArray(this.mobParts))
      for (let mobPart of this.mobParts) {
        sum += mobPart.inStock;
      }
    return sum;
  }

  upqty(mobPart) {
    if (mobPart.qty < mobPart.inStock) mobPart.qty++;
  }

  downqty(mobPart) {
    if (mobPart.qty != 0) mobPart.qty--;
  }
}
