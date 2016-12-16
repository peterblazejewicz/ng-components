/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopImageComponent } from './shop-image.component';

describe('ShopImageComponent', () => {
  let component: ShopImageComponent;
  let fixture: ComponentFixture<ShopImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
