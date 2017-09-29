import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { EASING } from '../../app.constants';

@Component({
  selector: 'ip-reveal-animation',
  templateUrl: './reveal-animation.component.html',
  styleUrls: ['./reveal-animation.component.scss'],
  animations: [
    trigger('revealAnimation', [
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
        '1 => 0',
        [
          animate(
            `{{ durationOut }} ${EASING}`,
            style({
              transform: 'translate3d(0, {{ translateOut }}, 0)',
              opacity: 0
            })
          )
        ],
        {
          params: {
            durationOut: '550ms',
            translateOut: '15px'
          }
        }
      ),
      transition(
        '0 => 1',
        [
          animate(
            0,
            style({
              transform: 'translate3d(0, {{ translateIn }}, 0)'
            })
          ),
          animate(
            `{{ durationIn }} ${EASING}`,
            style({
              transform: 'translateY(0)',
              opacity: 1
            })
          )
        ],
        {
          params: {
            durationIn: '350ms',
            translateIn: '15px'
          }
        }
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RevealAnimationComponent {
  @Input()
  animationState: boolean;

  @Input()
  animationParams: {
    durationIn?: string;
    durationOut?: string;
    translateIn?: string;
    translateOut?: string;
  };
}
