import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { SocialItem } from '../models/social.model';

const DATA = [
  {
    link: '',
    icon: 'icon-twitter'
  },
  {
    link: '',
    icon: 'icon-facebook'
  },
  {
    link: '',
    icon: 'icon-linkedin'
  }
];

@Injectable()
export class SocialApi {
  data$ = new BehaviorSubject(DATA);

  list(): Observable<SocialItem[]> {
    return this.data$.asObservable();
  }
}
