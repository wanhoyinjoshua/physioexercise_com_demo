import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtwobuttonsComponent } from './cardtwobuttons.component';

describe('CardtwobuttonsComponent', () => {
  let component: CardtwobuttonsComponent;
  let fixture: ComponentFixture<CardtwobuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtwobuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtwobuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
