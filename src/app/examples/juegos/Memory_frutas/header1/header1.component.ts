import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header1Component {
  /**
   * constructor method
   */
  constructor() { }
}
