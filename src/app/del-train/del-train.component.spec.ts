import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelTrainComponent } from './del-train.component';

describe('DelTrainComponent', () => {
  let component: DelTrainComponent;
  let fixture: ComponentFixture<DelTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
