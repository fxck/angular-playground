import { Injectable } from '@angular/core';

export interface SectionItem {
  key: string;
  active: boolean;
}

@Injectable()
export class SectionsStore {
  sections: SectionItem[] = [];

  add(key: string) {
    this.sections = [
      ...this.sections,
      {
        key,
        active: false
      }
    ];
  }

  list() {
    return this.sections;
  }

  remove(key: string) {
    this.sections = this.sections.filter((item) => item.key !== key);
  }

  getActive() {
    return this.sections.find((section) => section.active);
  }

  setActive(key: string) {
    this.sections = this.sections.map((section) => {
      if (section.key !== key) {
        return section;
      }
      return {
        key: section.key,
        active: true
      };
    });
  }

  setInactive(key: string) {
    this.sections = this.sections.map((section) => {
      if (section.key !== key) {
        return section;
      }

      return {
        key: section.key,
        active: false
      };

    });
  }
}
