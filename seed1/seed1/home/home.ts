import {Component} from 'angular2/core';
import {ContainerComponent} from '../container/container.component';


@Component({
  selector: 'home',
  template: `
  <container></container>
  `,
	directives: [
								ContainerComponent
							]
})

export class Home {}