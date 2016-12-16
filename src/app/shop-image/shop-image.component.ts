import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmpnt-shop-image',
  template: `
    <style>
    </style>
    <img #img (onLoad)="onImgLoad" (onError)="onImgError">

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

  constructor() { }

  ngOnInit() {
  }

  onImgLoad(event) { }

  onImgError(event) { }

}
