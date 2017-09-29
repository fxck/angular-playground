import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FadeAnimationComponent } from './fade-animation.component';

const DIRECTIVES = [
  FadeAnimationComponent
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
export class FadeAnimationModule { }
