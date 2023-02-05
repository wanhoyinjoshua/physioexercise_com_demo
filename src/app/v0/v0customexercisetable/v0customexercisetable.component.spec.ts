import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V0customexercisetableComponent } from './v0customexercisetable.component';

describe('V0customexercisetableComponent', () => {
  let component: V0customexercisetableComponent;
  let fixture: ComponentFixture<V0customexercisetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V0customexercisetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V0customexercisetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
