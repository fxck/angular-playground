import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaisedButtonModule } from './components/raised-button/raised-button.module';
import { WrapModule } from './components/wrap/wrap.module';
import { ContentIndenterModule } from './components/content-indenter/content-indenter.module';

const DIRECTIVES = [];
const MODULES = [
  CommonModule,

  RaisedButtonModule,
  WrapModule,
  ContentIndenterModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class IpCommonModule { }
