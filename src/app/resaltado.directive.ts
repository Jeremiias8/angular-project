import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el : ElementRef) {
    
  }

  ngOnInit() {
    // propiedad del element html
    var element = this.el.nativeElement;
    element.style.background = "blue";
    element.style.color = "white";
    element.style.margin = "8px 0px 8px 0px";
    element.style.padding = "8px";
    element.style.cursor = "pointer";

    element.innerText = element.innerText.toUpperCase().replace("CUALQUIER DUDA", "TODAS TUS DUDAS");
  }
}
