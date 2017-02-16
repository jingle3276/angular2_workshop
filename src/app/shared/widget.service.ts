import { Injectable } from '@angular/core';


@Injectable()
export class WidgetService {

    widgets = [
        {
          'id': 1,
          'img': 'assets/img/number-1.png',
          'name': 'Widget 101',
          'description': 'This is a description for 1',
          'featured': true
        },
        {
          'id': 2,
          'img': 'assets/img/number-2-blue-icon.png',
          'name': 'Widget 102',
          'description': 'This is a description for 2',
          'featured': false
        },
        {
          'id': 3,
          'img': 'assets/img/number-3-icon.png',
          'name': 'Widget 103',
          'description': 'This is a lovely widget',
          'featured': false
        }
    ];



}

 