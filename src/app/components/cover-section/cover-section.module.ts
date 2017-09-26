import { NgModule } from '@angular/core';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IpCommonModule } from '../../common.module';
import {
  CoverSectionComponent,
  CoverSectionDescriptionDirective,
  CoverSectionHeadingDirective
} from './cover-section.component';

const DIRECTIVES = [
  CoverSectionComponent,
  CoverSectionHeadingDirective,
  CoverSectionDescriptionDirective
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
export class CoverSectionModule { }
