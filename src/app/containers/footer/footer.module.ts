import { NgModule } from '@angular/core';

import { IpCommonModule } from '../../common.module';
import { LogoModule } from '../../components/logo/logo.module';
import { SocialListModule } from '../../components/social-list/social-list.module';
import { FooterContainer } from './footer.container';

const DIRECTIVES = [
  FooterContainer
];
const MODULES = [
  IpCommonModule,
  LogoModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class FooterModule { }
