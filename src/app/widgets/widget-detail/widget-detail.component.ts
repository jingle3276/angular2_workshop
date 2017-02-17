import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html'
})
export class WidgetDetailComponent {
  sel_widget: Widget;
  //@Output() saved = new EventEmitter();

  @Input() set widget(value: Widget){
    if (value) {
        this.sel_widget = Object.assign({}, value);
    }
  }

}
