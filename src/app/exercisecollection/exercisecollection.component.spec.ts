import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisecollectionComponent } from './exercisecollection.component';

describe('ExercisecollectionComponent', () => {
  let component: ExercisecollectionComponent;
  let fixture: ComponentFixture<ExercisecollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisecollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
