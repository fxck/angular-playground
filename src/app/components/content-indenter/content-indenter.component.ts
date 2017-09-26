import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ip-content-indenter',
  templateUrl: './content-indenter.component.html',
  styleUrls: ['./content-indenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentIndenterComponent {
  @Input()
  indenterWidth: string;

  @Input()
  indenterHeight: string;

  @Input()
  indenterOffset: string;

  @Input()
  contentOffset: string;
}
