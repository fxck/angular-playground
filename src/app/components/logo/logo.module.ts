import { NgModule } from '@angular/core';

import { IpCommonModule } from '../../common.module';
import { LogoComponent } from './logo.component';

const DIRECTIVES = [
  LogoComponent
];
const MODULES = [
  IpCommonModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class LogoModule { }
