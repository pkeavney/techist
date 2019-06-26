import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'none';
 }

}
