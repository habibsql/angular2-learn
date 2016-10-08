import { Component, OnInit } from '@angular/core';
import {Hero} from './hero.model';
import {HeroComponent} from './hero.component';
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'toh-heroes',
    templateUrl: 'heroes.component.html',    
    styleUrls: ['heroes.component.css'],
    providers: [HeroService] 
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    names : string[];

    constructor(private heroService: HeroService) {   
        this.names = ['y', 'x', 'z', 'b', 'a'];      
    }
    
    ngOnInit() {
       this.heroService.getHeroes()
           .subscribe(arg => this.heroes = arg);             
    }

    onSelect(hero:Hero){
        this.selectedHero = hero;
    }
}
