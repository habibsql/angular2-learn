import {RouterModule, Route,Routes} from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {ReportsComponent} from './reports/reports.component';

export const routeConfig: Routes = [
    {
        path:'', 
        component:DashboardComponent
    },
    {
        path:'heroes',
        component: HeroesComponent
    },
     {
        path:'reports',
        component: ReportsComponent
    }
]