import { Component, OnInit, Input } from '@angular/core';
import {Hero} from './hero.model';

@Component({
    moduleId: module.id,
    selector: 'toh-hero',
    templateUrl: 'hero.component.html'  ,
    styleUrls:['hero.component.css']
})
export class HeroComponent implements OnInit{
    @Input() hero: Hero;

    ngOnInit(){
        
    }
 }