import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
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

import { PersonItem } from '../../models/people.model';

@Component({
  selector: 'ip-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  animations: [
    trigger('animation', [
      state('0', style({})),
      state('1', style({})),
      transition('0 => 1', [
        group([
          group([
            query(
              '@fadeAnimation',
              animateChild()
            ),
            query(
              '@slideInAnimation',
              animateChild({
                delay: 200
              })
            ),
          ]),
          query(
            '@revealAnimation',
            stagger(150, [
              animateChild({
                delay: 500
              })
            ])
          )
        ])
      ]),
      transition('1 => 0', [
        query(
          '@revealAnimation',
          stagger(-100, [
            animateChild()
          ])
        ),
        query(
          '@slideInAnimation, @fadeAnimation',
          animateChild()
        ),
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {
  @Input()
  data: PersonItem;

  @Input()
  backgroundImage: string;

  @Input()
  defaultImage: string;

  @Input()
  inverted: boolean;

  @Input()
  visible = false;

  @HostBinding('class.is-inverted')
  get classIsInverted() {
    return !!this.inverted;
  }

  toggle() {
    this.visible = !this.visible;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
