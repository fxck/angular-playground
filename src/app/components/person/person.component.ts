import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';

import { PersonItem } from '../../models/people.model';

@Component({
  selector: 'ip-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
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

  @HostBinding('class.is-inverted')
  get classIsInverted() {
    return !!this.inverted;
  }
}
