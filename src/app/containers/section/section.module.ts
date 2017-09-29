import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InViewModule } from '../../directives/in-view/in-view.module';
import { SectionContainer } from './section.container';

const DIRECTIVES = [
  SectionContainer
];
const MODULES = [
  CommonModule,
  InViewModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class SectionModule { }
