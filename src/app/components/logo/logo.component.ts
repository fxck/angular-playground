import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy
} from '@angular/core';
import { coerceBooleanProperty } from '../../util';

@Component({
  selector: 'ip-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  @Input()
  set inverted(v) { this._inverted = coerceBooleanProperty(v); }
  get inverted() { return this._inverted; }

  @Input()
  size = '80px';

  @HostBinding('class.is-inverted')
  get classIsInverted() {
    return this.inverted;
  }

  private _inverted: boolean;
}
