import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-review',
  template: `
     <div>
       Hello day 2 
       Time is {{timeStr}}
     </div>
  `
})
export class ReviewComponent implements OnInit{
  timeStr: string;
  states: [
    'New York',
    'New Jersey',
    'DC'
  ];

  ngOnInit() {
    this.timeStr = '2017-02-17';
  }

}

