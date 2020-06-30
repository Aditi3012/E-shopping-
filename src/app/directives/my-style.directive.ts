import { element } from "protractor";
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: ".appMyStyle"
})
export class MyStyleDirective {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.width = "100px";
  }
}
