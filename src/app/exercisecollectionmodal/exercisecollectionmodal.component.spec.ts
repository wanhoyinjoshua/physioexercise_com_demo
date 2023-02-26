import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisecollectionmodalComponent } from './exercisecollectionmodal.component';

describe('ExercisecollectionmodalComponent', () => {
  let component: ExercisecollectionmodalComponent;
  let fixture: ComponentFixture<ExercisecollectionmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisecollectionmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisecollectionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
