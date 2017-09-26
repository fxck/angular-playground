import {
  Component,
  Input,
  Output,
  EventEmitter,
  Directive,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy
} from '@angular/core';

type AllowedLevels = 1 | 2 | 3;

@Directive({
  selector: '[ipCoverSectionHeading]'
})
export class CoverSectionHeadingDirective {
  @Input('ipCoverSectionHeading')
  set headingLevel(v: AllowedLevels) {
    if (!v) { return; }
    this._headingLevel = v;
  }
  get headingLevel() { return this._headingLevel; }
  private _headingLevel: AllowedLevels = 1;
}

@Directive({
  selector: '[ipCoverSectionDescription]'
})
export class CoverSectionDescriptionDirective { }

@Component({
  selector: 'ip-cover-section',
  templateUrl: './cover-section.component.html',
  styleUrls: ['./cover-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverSectionComponent {
  @ContentChild(CoverSectionHeadingDirective, { read: TemplateRef })
  headingTpl: CoverSectionHeadingDirective;

  @ContentChild(CoverSectionHeadingDirective)
  headingRef: CoverSectionHeadingDirective;

  @ContentChild(CoverSectionDescriptionDirective, { read: TemplateRef })
  descriptionTpl: TemplateRef<CoverSectionDescriptionDirective>;

  @Input()
  ctaLabel: string;

  @Input()
  backgroundColor: string;

  @Input()
  backgroundImage: string;

  @Input()
  defaultImage: string;

  @Output()
  ctaClick = new EventEmitter<MouseEvent>(false);
}
