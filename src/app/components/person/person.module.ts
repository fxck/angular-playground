import { NgModule } from '@angular/core';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IpCommonModule } from '../../common.module';
import { PersonComponent } from './person.component';

const DIRECTIVES = [
  PersonComponent
];
const MODULES = [
  LazyLoadImageModule,

  IpCommonModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class PersonModule { }
