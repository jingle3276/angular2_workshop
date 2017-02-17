import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Widget } from './widget.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';


const BASE_URL = 'http://localhost:3000/items/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class WidgetService {

    constructor(private http: Http) {}

    loadWidgets() {
        //return Observable
        return this.http.get(BASE_URL)
          .map(x => x.json())
          .filter(item => item.id === '4')
          .map(items => items.map(item => Object.assign({}, item, {img: `${IMG_URL}${item.img}`})))
        ;
    }


}

 