import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  stagger,
  group
} from '@angular/animations';

import { SocialApi } from '../../services/social-api.service';

@Component({
  selector: 'ip-app-bar',
  templateUrl: './app-bar.container.html',
  styleUrls: ['./app-bar.container.scss'],
  animations: [
    trigger('animation', [
      state('0', style({})),
      state('1', style({})),
      transition('0 => 1', [
        query('@slideInAnimation', [
          stagger(100, animateChild())
        ]),
        query('@fadeAnimation', [
          animateChild()
        ])
      ])
    ])
  ],
})
export class AppBarContainer {
  @Input()
  visible: boolean;

  constructor(public socialApi: SocialApi) { }
}
