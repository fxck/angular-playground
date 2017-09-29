import { NgModule } from '@angular/core';

import { IpCommonModule } from '../../common.module';
import { IconBoxModule } from '../../components/icon-box/icon-box.module';
import { ServicesContainer } from './services.container';

const DIRECTIVES = [
  ServicesContainer
];
const MODULES = [
  IpCommonModule,
  IconBoxModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class ServicesModule { }
