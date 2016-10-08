import {Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';

@Component({
  selector: 'my-app', 
  template: `
             <h1>{{title}}</h1>             
            `  
})
export class AppComponent { 
  title='Angular2 force awakness';
};
