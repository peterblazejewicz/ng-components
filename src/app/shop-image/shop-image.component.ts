import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shop-image',
  template: `
    <img #img alt="{{alt}}">
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      opacity: 0;
      transition: 0.5s opacity;
    }
  `]
})
export class ShopImageComponent implements OnInit, OnChanges {

  @ViewChild('img')
  img: ElementRef;
  @Input()
  src: string;
  @Input()
  alt: string;
  @Input()
  placeholderImg: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.img.nativeElement.addEventListener('load', this.onImgLoad.bind(this));
    this.img.nativeElement.addEventListener('error', this.onImgError.bind(this));
  }

  onImgLoad(event) {
    this.img.nativeElement.style.transition = '0.5s opacity';
    this.img.nativeElement.style.opacity = '1';
  }

  onImgError(event) {
    if (!this.placeholderImg) {
      // tslint:disable-next-line:max-line-length
      this.img.nativeElement.src = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#CCC" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>')}`;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.srcChanged();
    }
    if (changes['placeholderImg']) {
      this.placeholderImgChanged();
    }
  }

  private srcChanged() {
    this.img.nativeElement.src = '';
    this.img.nativeElement.style.transition = '';
    this.img.nativeElement.style.opacity = '0';
    if (this.src) {
      this.img.nativeElement.src = this.src;
    }
  }

  private placeholderImgChanged() {
    this.el.nativeElement.style.backgroundImage = `url('${this.placeholderImg}')`;
  }

}
