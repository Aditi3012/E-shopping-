import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lap-menu",
  template: `
    <ul id="menu">
      <li><a [routerLink]="['/laptops/lenovo']">Lenovo</a></li>
      <li><a [routerLink]="['/laptops/hp']">HP</a></li>
      <li><a [routerLink]="['/laptops']">Laptops</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LapMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
