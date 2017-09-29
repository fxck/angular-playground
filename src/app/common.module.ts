import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaisedButtonModule } from './components/raised-button/raised-button.module';
import { WrapModule } from './components/wrap/wrap.module';
import { ContentIndenterModule } from './components/content-indenter/content-indenter.module';
import { LinkButtonModule } from './components/link-button/link-button.module';
import { InViewModule } from './directives/in-view/in-view.module';
import { SlideInAnimationModule } from './components/slide-in-animation/slide-in-animation.module';
import { RevealAnimationModule } from './components/reveal-animation/reveal-animation.module';
import { FadeAnimationModule } from './components/fade-animation/fade-animation.module';

const DIRECTIVES = [];
const MODULES = [
  CommonModule,

  RaisedButtonModule,
  LinkButtonModule,
  WrapModule,
  ContentIndenterModule,
  InViewModule,
  RevealAnimationModule,
  SlideInAnimationModule,
  FadeAnimationModule
];
const PROVIDERS = [];

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [ PROVIDERS ],
  imports: [ MODULES ],
  exports: [ DIRECTIVES, MODULES ],
})
export class IpCommonModule { }
