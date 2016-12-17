import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'shop-image',
  template: `
    <img #img (onLoad)="onImgLoad" (onError)="onImgError" alt="{{alt}}">
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
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
  }

  onImgLoad(event) {
    this.img.nativeElement.style.transition = '0.5s opacity';
    this.img.nativeElement.style.opacity = '1';
  }

  onImgError(event) {
    if (!this.placeholderImg) {
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
