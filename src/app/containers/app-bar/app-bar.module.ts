import { NgModule } from '@angular/core';

import { IpCommonModule } from '../../common.module';
import { LogoModule } from '../../components/logo/logo.module';
import { SocialListModule } from '../../components/social-list/social-list.module';
import { AppBarContainer } from './app-bar.container';

const DIRECTIVES = [
  AppBarContainer
];
const MODULES = [
  IpCommonModule,
  LogoModule,
  SocialListModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class AppBarModule { }
