import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  TemplateRef,
  ContentChild
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[ip-link-button], a[ip-link-button]',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonComponent {
  @HostBinding('class.c-button-base')
  get classButtonBase() {
    return true;
  }

  @ContentChild(TemplateRef)
  tpl: TemplateRef<any>;
}
