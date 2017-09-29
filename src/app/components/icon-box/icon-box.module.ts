import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconBoxComponent } from './icon-box.component';

const DIRECTIVES = [
  IconBoxComponent
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
export class IconBoxModule { }
