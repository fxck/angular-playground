import { Component } from '@angular/core';

import { PeopleApi } from './services/people-api.service';

@Component({
  selector: 'ip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public peopleApi: PeopleApi) { }

  _trackBy(index: number) {
    return index;
  }
}
