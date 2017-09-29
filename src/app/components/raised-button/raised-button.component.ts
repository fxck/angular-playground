import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ContentChild,
  TemplateRef
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[ip-raised-button], a[ip-raised-button]',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaisedButtonComponent {
  @ContentChild(TemplateRef)
  tpl: TemplateRef<any>;

  @HostBinding('class.c-button-base')
  get classButtonBase() {
    return true;
  }
}
