import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbartwoComponent } from './searchbartwo.component';

describe('SearchbartwoComponent', () => {
  let component: SearchbartwoComponent;
  let fixture: ComponentFixture<SearchbartwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbartwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbartwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
