import { Component, AfterViewInit } from '@angular/core';

import { PeopleApi } from './services/people-api.service';

@Component({
  selector: 'ip-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  pageLoaded = false;
  introVisible = false;

  constructor(public peopleApi: PeopleApi) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 300);
  }

  _trackBy(index: number) {
    return index;
  }
}
