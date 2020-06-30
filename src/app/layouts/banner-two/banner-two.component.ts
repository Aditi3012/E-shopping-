import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner-two",
  template: `
    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            <h5 class="header col s12 light">
              A modern responsive front-end framework based on Material Design
            </h5>
          </div>
        </div>
      </div>
      <div class="parallax">
        <img
          src="./../assets/img/ban1.jpg"
          alt="Unsplashed background img 2"
          height="720"
          width="1420"
        />
      </div>
    </div>
  `,
  styles: []
})
export class BannerTwoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
