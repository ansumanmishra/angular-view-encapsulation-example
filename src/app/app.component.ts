import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>h1 text from {{constructor.name}}</h1>
            <parent></parent>`,
  styles: [``],
})
export class AppComponent  {
}
