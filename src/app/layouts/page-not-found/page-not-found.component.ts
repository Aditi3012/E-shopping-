import { Component, OnInit } from "@angular/core";

@Component({
  selector: "page-not-found",
  template: `
    <img src="../../../assets/img/404.jpg" />
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
