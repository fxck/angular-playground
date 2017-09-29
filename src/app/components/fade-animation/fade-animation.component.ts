import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'ip-fade-animation',
  templateUrl: './fade-animation.component.html',
  styleUrls: ['./fade-animation.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state(
        '0',
        style({
          opacity: 0
        })
      ),
      state(
        '1',
        style({
          opacity: 1
        })
      ),
      transition(
        '0 => 1',
        [
          animate(`{{ duration }} linear`),
        ],
        {
          params: {
            duration: '700ms'
          }
        }
      ),
      transition(
        '1 => 0',
        [
          animate(`{{ duration }} linear`),
        ],
        {
          params: {
            duration: '700ms'
          }
        }
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FadeAnimationComponent {
  @Input()
  animationState: boolean;

  @Input()
  animationParams: {
    duration?: string;
  };
}
