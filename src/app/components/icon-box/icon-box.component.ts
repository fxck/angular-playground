import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ip-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBoxComponent {
  @Input()
  label: string;

  @Input()
  text: string;

  @Input()
  icon: string;
}
