import { LAPPARTS } from "./lap-mock";
import { LapParts } from "./lap-parts";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "laptop",
  templateUrl: "./laptop.component.html",
  styles: []
})
export class LaptopComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  ldate = new Date();
  lapParts: LapParts[] = LAPPARTS;

  totalLaps() {
    var total = 0;
    for (let lapPart of this.lapParts) {
      total += lapPart.inStock;
    }
    return total;
  }

  upqty(lapPart) {
    if (lapPart.qty < lapPart.inStock) lapPart.qty++;
  }

  downqty(lapPart) {
    if (lapPart.qty != 0) lapPart.qty--;
  }
}
