import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevealAnimationComponent } from './reveal-animation.component';

const DIRECTIVES = [
  RevealAnimationComponent
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
export class RevealAnimationModule { }
