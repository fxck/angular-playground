import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppBarModule } from './containers/app-bar/app-bar.module';
import { CoverSectionModule } from './components/cover-section/cover-section.module';
import { BgLinesModule } from './components/bg-lines/bg-lines.module';
import { PersonModule } from './components/person/person.module';
import { IconBoxModule } from './components/icon-box/icon-box.module';
import { FooterModule } from './containers/footer/footer.module';
import { SectionModule } from './containers/section/section.module';
import { MenuModule } from './containers/menu/menu.module';
import { ServicesModule } from './containers/services/services.module';

export const APP_IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,

  AppBarModule,
  CoverSectionModule,
  BgLinesModule,
  PersonModule,
  IconBoxModule,
  FooterModule,
  SectionModule,
  MenuModule,
  ServicesModule
];
