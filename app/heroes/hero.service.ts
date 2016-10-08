 import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

    constructor(private http:Http) {         
    }

    getHeroes():any{
       return this.http.get('/app/heroes/heroes.json')
           .map((response: Response) => response.json());

        //  return [
        //     {'id': 11, 'name':'Ahasan Habib Father'},
        //     {'id': 12, 'name':'Labiba Ahasan'},
        //     {'id': 13, 'name':'Fariha Ahasan'},
        //     {'id': 14, 'name':'Shariar Kabir'},
        //     {'id': 15, 'name':'Ayes Kabir'},
        // ];


    }
}