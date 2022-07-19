import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitieChildComponent } from './activitie-child.component';

describe('ActivitieChildComponent', () => {
  let component: ActivitieChildComponent;
  let fixture: ComponentFixture<ActivitieChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitieChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitieChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
