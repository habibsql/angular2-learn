import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {ReportsComponent} from './reports/reports.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroComponent} from './heroes/hero.component';
import {HttpModule} from '@angular/http';
import {ArrayPipe} from './heroes/hero.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ ReportsComponent, HeroesComponent, HeroComponent, ArrayPipe ],
  providers:[],
  bootstrap:    [ HeroesComponent  ]
})
export class AppModule { }
