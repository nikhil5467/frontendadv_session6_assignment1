import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { Home } from '../home/home';
import { Projects } from '../projects/projects';


@RouteConfig([
  {path: '/', component : Home, as: 'Home'},
  {path: '/addNew', component: Projects, as: 'AddNew'}
])

@Component({
  directives: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
   ],
  selector: 'app',
  template: `
    <main>
      <header></header> 
      <router-outlet></router-outlet>
      <footer></footer>
    </main>
  `
})

export class App {}
