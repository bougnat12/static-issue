import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static PredefinedZoomEnumMapList = [
    ['full',        0],
    ['center',      1],
    ['left',        2],
    ['right',       3],
    ['top',         4],
    ['bottom',      5],
    ['topLeft',     6],
    ['topRight',    7],
    ['bottomLeft',  8],
    ['bottomRight', 9],
  ];

  // Next line fails when running 'ng test' and works if it's commented out
  static PredefinedZoomEnumLabelList = AppComponent.PredefinedZoomEnumMapList.map((zoneAspect) => zoneAspect[0]);

  title = 'static-issue';
}
