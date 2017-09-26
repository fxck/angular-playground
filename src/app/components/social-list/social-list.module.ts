import { NgModule } from '@angular/core';

import { SocialListComponent } from './social-list.component';
import { IpCommonModule } from '../../common.module';

const DIRECTIVES = [
  SocialListComponent
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
export class SocialListModule { }
