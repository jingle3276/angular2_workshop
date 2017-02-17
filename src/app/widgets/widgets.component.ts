import { Component, OnInit } from '@angular/core';
import { WidgetService, Widget} from '../shared';
import { Router, ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-widegts',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget ;
  widgets: Widget[];

  constructor(
    private widgetService: WidgetService
  ) {}


  ngOnInit() {
    this.widgetService.loadWidgets().subscribe(
        res => {
          this.widgets = res;
    });
  }

  selectWidget (widget: Widget) {
    this.selectedWidget = widget;
  } 

}

