import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'parent',
  template: `<h1>h1 text from {{constructor.name}}</h1><child></child>`,
  styles: [`h1 {color: red;}`],
  encapsulation: ViewEncapsulation.Encapsulated
})
export class ParentComponent {
  // 0 Encapsulated
  // 2 None
  // 1 Native
  // 3 ShadowDom
}
