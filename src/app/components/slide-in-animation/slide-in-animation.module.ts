import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideInAnimationComponent } from './slide-in-animation.component';

const DIRECTIVES = [
  SlideInAnimationComponent
];
const MODULES = [
  CommonModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class SlideInAnimationModule { }
