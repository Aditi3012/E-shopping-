import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tv-menu",
  template: `
    <ul id="menu">
      <li><a [routerLink]="['/Tv/sam']">Samsung</a></li>
      <li><a [routerLink]="['/Tv/toshiba']">Toshiba</a></li>
      <li><a [routerLink]="['/Tv']">TVs</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TvMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
