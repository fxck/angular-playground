import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentIndenterComponent } from './content-indenter.component';

const DIRECTIVES = [
  ContentIndenterComponent
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
export class ContentIndenterModule { }
