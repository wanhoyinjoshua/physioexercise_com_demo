import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingmodalComponent } from './settingmodal.component';

describe('SettingmodalComponent', () => {
  let component: SettingmodalComponent;
  let fixture: ComponentFixture<SettingmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
