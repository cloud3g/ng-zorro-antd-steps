import { Component, OnInit, HostBinding } from '@angular/core';
import { defaultPageSwitchTransition } from './default.animation';

@Component({
  selector: 'app-main',
  templateUrl: './default.component.html',
  styleUrls: [ './default.component.css' ],
  animations: [ defaultPageSwitchTransition ]
})
export class DefaultComponent implements OnInit {
  @HostBinding('@defaultPageSwitchTransition') state = 'activated';

  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
