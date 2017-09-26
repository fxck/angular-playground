import { NgModule } from '@angular/core';

import { IpCommonModule } from '../../common.module';
import { BgLinesComponent } from './bg-lines.component';

const DIRECTIVES = [
  BgLinesComponent
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
export class BgLinesModule { }
