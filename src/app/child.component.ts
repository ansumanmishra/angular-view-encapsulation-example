import { Component} from '@angular/core';

@Component({
  selector: 'child',
  template: `<h1>h1 text from {{constructor.name}}</h1>`
})
export class ChildComponent {

}