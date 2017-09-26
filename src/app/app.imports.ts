import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppBarModule } from './containers/app-bar/app-bar.module';
import { CoverSectionModule } from './components/cover-section/cover-section.module';
import { BgLinesModule } from './components/bg-lines/bg-lines.module';
import { PersonModule } from './components/person/person.module';

export const APP_IMPORTS = [
  BrowserModule,
  CommonModule,

  AppBarModule,
  CoverSectionModule,
  BgLinesModule,
  PersonModule
];
