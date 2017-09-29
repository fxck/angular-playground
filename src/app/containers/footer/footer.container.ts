import { Component } from '@angular/core';

import { PeopleApi } from '../../services/people-api.service';

@Component({
  selector: 'ip-footer',
  templateUrl: './footer.container.html',
  styleUrls: ['./footer.container.scss']
})
export class FooterContainer {
  constructor(public peopleApi: PeopleApi) { }
}
