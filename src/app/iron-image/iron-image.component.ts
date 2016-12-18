import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'iron-image',
  templateUrl: './iron-image.component.html',
  styleUrls: ['./iron-image.component.scss']
})
export class IronImageComponent implements OnInit, OnChanges {

  @Input()
  alt: string;
  @Input()
  fade: boolean;
  @Input()
  src: string;
  @Input()
  sizing: string;
  @Input()
  placeholder: string;
  @Input()
  position: string;
  @Input()
  preload: boolean;
  @Input()
  width: any;
  @Input()
  height: any;
  @ViewChild('sizedImgDiv')
  sizedImgDiv: ElementRef;
  @ViewChild('img')
  img: ElementRef;
  @ViewChild('placeholder')
  placeholderEl: ElementRef;

  loading: boolean = false;
  loaded: boolean = false;
  error: boolean = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let img = this.img.nativeElement;
    img.onload = function () {
      if (img.src === '') {
        return;
      }
      this.loading = false;
      this.loaded = true;
      this.error = false;
    }.bind(this);
    img.onerror = function () {
      if (img.src === '') {
        return;
      }
      this.reset();
      this.loading = false;
      this.loaded = false;
      this.error = true;
    }.bind(this);
  }

  ngOnChanges(changed: SimpleChanges) {
    if (changed['alt']) {
      this.onAltChanged();
    }
    if (changed['position']) {
      this.onPositionChanged();
    }
    if (changed['src']) {
      this.onSrcChanged(changed['src']);
    }
    if (changed['sizing']) {
      this.onSizingChanged();
    }
    if (changed['placeholder']) {
      this.onPlaceholderChanged();
    }
    if (changed['width']) {
      this.onWidthChanged();
    }
    if (changed['height']) {
      this.onHeightChanged();
    }
  }

  load(src: string) {
    if (src) {
      this.img.nativeElement.src = src;
    } else {
      this.img.nativeElement.removeAttribute('src');
    }
    this.sizedImgDiv.nativeElement.style.backgroundImage = src ? 'url("' + src + '")' : '';
    this.loading = !!src;
    this.loaded = false;
    this.error = false;
  }
  reset() {
    this.img.nativeElement.removeAttribute('src');
    this.sizedImgDiv.nativeElement.style.backgroundImage = '';
    this.loading = false;
    this.loaded = false;
    this.error = false;
  }

  onSrcChanged(change: SimpleChange) {
    if (change.currentValue === change.previousValue) {
      return;
    }
    this.reset();
    this.load(change.currentValue);
  }
  onAltChanged() {
    this.sizedImgDiv.nativeElement.setAttribute('aria-label', this.alt);
  }

  onPlaceholderChanged() {
    this.placeholderEl.nativeElement.style.backgroundImage =
      this.placeholder ? `url('${this.placeholder}')` : '';
  }

  onPositionChanged() {
    this.transformChanged();
  }

  onSizingChanged() {
    this.transformChanged();
  }

  private transformChanged() {
    let sizedImgDivStyle = this.sizedImgDiv.nativeElement.style;
    let placeholderStyle = this.placeholderEl.nativeElement.style;
    sizedImgDivStyle.backgroundSize =
      placeholderStyle.backgroundSize =
      this.sizing;
    sizedImgDivStyle.backgroundPosition =
      placeholderStyle.backgroundPosition =
      this.sizing ? this.position : '';
    sizedImgDivStyle.backgroundRepeat =
      placeholderStyle.backgroundRepeat =
      this.sizing ? 'no-repeat' : '';
  }

  onWidthChanged() {
    this.el.nativeElement.style.width = isNaN(this.width) ? this.width : `${this.width}px`;
  }

  onHeightChanged() {
    this.el.nativeElement.style.height = isNaN(this.height) ? this.height : `${this.height}px`;
  }

  computePlaceholderClassName() {
    return (this.preload && this.fade && !this.loading && this.loaded) ? 'faded-out' : '';
  }
  computePlaceholderHidden() {
    return !this.preload || (!this.fade && !this.loading && this.loaded);
  }
  computeImgDivHidden() {
    return !this.sizing;
  }
  computeImgHidden() {
    return !!this.sizing;
  }

  computeAriaLabel() {
    return this.alt;
  }
}
