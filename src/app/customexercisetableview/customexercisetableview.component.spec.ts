import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomexercisetableviewComponent } from './customexercisetableview.component';

describe('CustomexercisetableviewComponent', () => {
  let component: CustomexercisetableviewComponent;
  let fixture: ComponentFixture<CustomexercisetableviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomexercisetableviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomexercisetableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
