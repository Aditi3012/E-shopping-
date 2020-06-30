import { TVPARTS } from "./Tv-mock";
import { TvParts } from "./tv-parts";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tv",
  templateUrl: "./tv.component.html",
  styleUrls: ["./tv.component.css"]
})
export class TvComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  tdate = new Date();
  tvParts: TvParts[] = TVPARTS;

  totalTV() {
    var sum = 0;
    for (let tvPart of this.tvParts) {
      sum += tvPart.inStock;
    }
    return sum;
  }

  upqty(tvPart) {
    if (tvPart.qty < tvPart.inStock) tvPart.qty++;
  }

  downqty(tvPart) {
    if (tvPart.qty != 0) {
      tvPart.qty--;
    }
  }
}
