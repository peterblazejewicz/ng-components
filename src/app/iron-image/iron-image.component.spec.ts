/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IronImageComponent } from './iron-image.component';

describe('IronImageComponent', () => {
  let component: IronImageComponent;
  let fixture: ComponentFixture<IronImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
