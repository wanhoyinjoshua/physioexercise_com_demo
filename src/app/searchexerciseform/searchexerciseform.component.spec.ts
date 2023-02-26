import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchexerciseformComponent } from './searchexerciseform.component';

describe('SearchexerciseformComponent', () => {
  let component: SearchexerciseformComponent;
  let fixture: ComponentFixture<SearchexerciseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchexerciseformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchexerciseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
