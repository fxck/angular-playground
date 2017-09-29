import { Component } from '@angular/core';

import { SectionsStore, SectionItem } from '../../services/sections-sttore.service';

@Component({
  selector: 'ip-menu',
  templateUrl: './menu.container.html',
  styleUrls: ['./menu.container.scss']
})
export class MenuContainer {
  constructor(public sectionsStore: SectionsStore) {
  }

  _trackBy(index: number) {
    return index;
  }
}
