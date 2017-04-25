import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log('clicked');
  }


  constructor() { }

}
