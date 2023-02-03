import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseitemComponent } from './exerciseitem.component';

describe('ExerciseitemComponent', () => {
  let component: ExerciseitemComponent;
  let fixture: ComponentFixture<ExerciseitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
