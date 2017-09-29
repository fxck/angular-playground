import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { SectionsStore } from '../../services/sections-sttore.service';
import { InViewDirective } from '../../directives/in-view/in-view.directive';

@Component({
  selector: 'ip-section',
  templateUrl: './section.container.html',
  styleUrls: ['./section.container.scss']
})
export class SectionContainer implements OnInit {
  @Input()
  key: string;

  @Input()
  activeOffsetTop: any;

  @Input()
  activeOffsetBottom: any;

  @ViewChild('inViewRef', { read: InViewDirective })
  _inViewRef: InViewDirective;

  constructor(private _sectionsStore: SectionsStore) { }

  isActive() {
    const activeSection = this._sectionsStore.getActive();
    return activeSection && this.key && activeSection.active && activeSection.key === this.key;
  }

  setActive() {
    this._sectionsStore.setActive(this.key);
  }

  setInactive() {
    this._sectionsStore.setInactive(this.key);
  }

  refreshInView(full = false) {
    this._inViewRef.refresh(full);
  }

  ngOnInit() {
    this._sectionsStore.add(this.key);
  }
}
