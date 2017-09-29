import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuContainer } from './menu.container';

const DIRECTIVES = [
  MenuContainer
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
export class MenuModule { }
