import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcollectionformComponent } from './searchcollectionform.component';

describe('SearchcollectionformComponent', () => {
  let component: SearchcollectionformComponent;
  let fixture: ComponentFixture<SearchcollectionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcollectionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcollectionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
