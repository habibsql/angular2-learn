import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {ReportsComponent} from './reports/reports.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroComponent} from './heroes/hero.component';
import {HttpModule} from '@angular/http';
import {ArrayPipe} from './heroes/hero.pipe';
import {RouterModule} from '@angular/router';
import {routeConfig} from './app.route';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routeConfig) ],
  declarations: [ ReportsComponent, HeroesComponent, HeroComponent, ArrayPipe, DashboardComponent ],
  providers:[],
  bootstrap:    [ DashboardComponent  ]
})
export class AppModule { }
