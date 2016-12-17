import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shop-image',
  template: `
    <img #img (onLoad)="onImgLoad" (onError)="onImgError" src="{{src}}" alt="{{alt}}">
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
export class ShopImageComponent implements OnInit {

  @Input()
  src: string;
  @Input()
  alt: string;
  @Input()
  placeholderImg: string;

  constructor() { }

  ngOnInit() {
  }

  onImgLoad(event) { }

  onImgError(event) { }

}
