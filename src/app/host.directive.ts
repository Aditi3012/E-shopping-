import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appHost]"
})
export class HostDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    // this.changeBgColor("blue");
  }

  @HostBinding("style.textShadow") textShadow: string;
  @HostBinding("style.bgColor") bgColor: string;

  @HostListener("mouseover") onMouseOver() {
    this.textShadow = "2px 2px 2px red";

    //this.changeBgColor("red");
  }
  @HostListener("click") onClick() {
    window.alert("Host element clicked");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeBgColor("black");
    this.textShadow = "1px 1px 1px black";
    //this.bgColor = "black";
  }

  changeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, "color", color);
  }
}
