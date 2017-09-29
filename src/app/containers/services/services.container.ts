import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
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

import { ServicesApi } from '../../services/services-api.service';

@Component({
  selector: 'ip-services',
  templateUrl: './services.container.html',
  styleUrls: ['./services.container.scss'],
  animations: [
    trigger('animation', [
      state('0', style({})),
      state('1', style({})),
      transition('0 => 1', [
        query('@revealAnimation', [
          stagger(150, animateChild())
        ])
      ]),
      transition('1 => 0', [
        query('@revealAnimation', [
          stagger(-150, animateChild())
        ])
      ])
    ])
  ]
})
export class ServicesContainer implements OnInit {
  @Input()
  visible: boolean;

  @Output()
  itemsLoaded = new EventEmitter<void>(false);

  items$ = this.servicesApi.list();

  constructor(public servicesApi: ServicesApi) {}

  ngOnInit() {
    this.items$.delay(1).subscribe(() => this.itemsLoaded.emit());
  }
}
