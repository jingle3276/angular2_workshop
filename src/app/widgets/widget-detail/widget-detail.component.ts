import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html'
})
export class WidgetDetailComponent {
  @Input()
  widget: Widget;
  //@Output() saved = new EventEmitter();

}
