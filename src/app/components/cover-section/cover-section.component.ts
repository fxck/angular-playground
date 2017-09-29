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
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  stagger,
  group
} from '@angular/animations';

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
  animations: [
    trigger('animation', [
      state('0', style({})),
      state('1', style({})),
      transition('0 => 1', [
        query('@slideInAnimation, @revealAnimation', [
          stagger(100, animateChild())
        ], { optional: true })
      ]),
      transition('1 => 0', [
        query('@slideInAnimation, @revealAnimation', [
          stagger(-100, animateChild())
        ], { optional: true })
      ])
    ])
  ],
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
  ctaLink: string;

  @Input()
  backgroundColor: string;

  @Input()
  backgroundImage: string;

  @Input()
  defaultImage: string;

  @Input()
  visible = false;

  @Output()
  ctaClick = new EventEmitter<MouseEvent>(false);

  toggle() {
    this.visible = !this.visible;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
