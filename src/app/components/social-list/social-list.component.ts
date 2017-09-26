import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { SocialItem } from '../../models/social.model';

@Component({
  selector: 'ip-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialListComponent {
  @Input()
  data: SocialItem[];

  _trackBy(index: number) {
    return index;
  }
}
