import { Component } from '@angular/core';

import { SocialApi } from '../../services/social-api.service';

@Component({
  selector: 'ip-app-bar',
  templateUrl: './app-bar.container.html',
  styleUrls: ['./app-bar.container.scss']
})
export class AppBarContainer {
  constructor(public socialApi: SocialApi) { }
}
