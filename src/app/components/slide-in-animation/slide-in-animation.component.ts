import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { EASING } from '../../app.constants';

@Component({
  selector: 'ip-slide-in-animation',
  templateUrl: './slide-in-animation.component.html',
  styleUrls: ['./slide-in-animation.component.scss'],
  animations: [
    trigger('slideInAnimation', [
      state(
        '0',
        style({
          transform: 'rotate(5deg) translateY(100%)'
        })
      ),
      state(
        '1',
        style({
          transform: 'rotate(0) translateY(0)'
        })
      ),
      transition(
        '0 => 1',
        [
          animate(`{{ durationIn }} linear`),
        ],
        {
          params: {
            durationIn: '300ms'
          }
        }
      ),
      transition(
        '1 => 0',
        [
          animate(`{{ durationOut }} linear`),
        ],
        {
          params: {
            durationOut: '300ms'
          }
        }
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideInAnimationComponent {
  @Input()
  animationState: boolean;

  @Input()
  animationParams: {
    durationIn?: string;
    durationOut?: string;
  };
}
