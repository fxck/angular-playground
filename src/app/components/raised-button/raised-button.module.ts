import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaisedButtonComponent } from './raised-button.component';

const DIRECTIVES = [
  RaisedButtonComponent
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
export class RaisedButtonModule { }
