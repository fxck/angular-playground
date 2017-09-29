import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkButtonComponent } from './link-button.component';

const DIRECTIVES = [
  LinkButtonComponent
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
export class LinkButtonModule { }
