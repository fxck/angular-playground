import { NgModule } from '@angular/core';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { InViewDirective } from './in-view.directive';

const DIRECTIVES = [
  InViewDirective
];
const MODULES = [
  ScrollDispatchModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class InViewModule { }
