import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  NgZone,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Directive({
  selector: '[ipInView]',
  exportAs: 'inView'
})
export class InViewDirective implements AfterViewInit {

  private _inView: boolean;
  private _elementRect: {
    top: number;
    left: number;
    height: number;
  };
  private _scrollPosition: {
    top: number;
    left: number;
  };
  private _windowSize: {
    width: number;
    height: number;
  };

  @Input()
  ipInView: string;

  @Input()
  set inViewOffsetTop(v: any) {
    if (v !== undefined) {
      this._inViewOffsetTop = v;
    }
  }
  get inViewOffsetTop() {
    return this._inViewOffsetTop;
  }

  @Input()
  set inViewOffsetBottom(v: any) {
    if (v !== undefined) {
      this._inViewOffsetBottom = v;
    }
  }
  get inViewOffsetBottom() {
    return this._inViewOffsetBottom;
  }

  @Output()
  enteredView = new EventEmitter<string>(false);

  @Output()
  leftView = new EventEmitter<string>(false);

  private _inViewOffsetTop: any = 0;
  private _inViewOffsetBottom: any = 0;

  private _offsets: { top: any; bottom: any; } = {
    top: 0,
    bottom: 0
  };

  constructor(
    private _scrollDispatcher: ScrollDispatcher,
    private _elementRef: ElementRef,
    private _ngZone: NgZone
  ) {
    this._windowSize = {
      width: 0,
      height: 0
    };

    this._scrollPosition = {
      top: 0,
      left: 0
    };

    this._elementRect = {
      top: 0,
      left: 0,
      height: 0
    };

    this._inView = false;
  }

  refresh(full = false) {
    this._calculateWindowSize();
    this._calculateScrollPosition();
    this._calculateElementPosition();
    this._calculateOffsets();

    if (full) {
      this._setInView();
      this._calculateOffsets();
    }
  }

  ngAfterViewInit() {
    this.refresh();

    this._scrollDispatcher.scrolled(40, () => {
      this._calculateScrollPosition();
      this._setInView();
    });

    setTimeout(() => {
      this._setInView();
    }, 50);

  }

  @HostListener('window:resize')
  onWindowResize() {
    this.refresh(true);
  }

  private _getOffset(offset) {
    let type = 'pixels';
    let finalOffset;
    if (typeof offset === 'string') {
      if (offset.indexOf('eh') !== -1) {
        type = 'elementHeight';
      }

      if (offset.indexOf('vh') !== -1) {
        type = 'viewHeight';
      }
    }

    switch (type) {
      case 'elementHeight':
        finalOffset =  this._elementRect.height * (offset.replace('eh', '') / 100);
        break;
      case 'viewHeight':
        finalOffset = this._windowSize.height * (offset.replace('vh', '') / 100);
        break;
      case 'pixels':
      default:
        finalOffset = offset;
        break;
    }

    return finalOffset;

  }

  private _calculateOffsets() {
    this._offsets.top = this._getOffset(this.inViewOffsetTop);
    this._offsets.bottom = this._getOffset(this.inViewOffsetBottom);

  }

  private _calculateScrollPosition() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const left = window.pageXOffset || document.documentElement.scrollLeft;

    this._scrollPosition = { top, left };
  }

  private _calculateElementPosition() {
    const scrollBoundingPosition = this._elementRef.nativeElement.getBoundingClientRect();

    this._elementRect = {
      top: scrollBoundingPosition.top + this._scrollPosition.top,
      left: scrollBoundingPosition.left + this._scrollPosition.left,
      height: scrollBoundingPosition.height
    };
  }

  private _calculateWindowSize() {
    this._windowSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private _setInView() {
    const elTop = this._elementRect.top - (this._windowSize.height) - this._offsets.top;
    const elBottom = (this._elementRect.top + this._elementRect.height) - this._offsets.bottom;

    if ((this._scrollPosition.top - elTop) > 0 && (this._scrollPosition.top - elBottom) < 0) {
      if (!this._inView) {
        this._ngZone.run(() => {
          this._inView = true;
          this.enteredView.emit(this.ipInView);
        });
      }
    }

    if ((this._scrollPosition.top - elBottom) > 0 || (this._scrollPosition.top - elTop) < 0) {
      if (this._inView) {
        this._ngZone.run(() => {
          this._inView = false;
          this.leftView.emit(this.ipInView);
        });
      }
    }
  }
}
