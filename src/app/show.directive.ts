import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  private el: ElementRef;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  @HostListener('click') onClick() {
    this.showContent();
  }
  
  private showContent(){
    this.el.nativeElement.style.display = 'block';
  }
}
