import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapComponent } from './wrap.component';

const DIRECTIVES = [
  WrapComponent
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
export class WrapModule { }
