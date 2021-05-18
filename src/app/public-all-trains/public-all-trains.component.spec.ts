import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAllTrainsComponent } from './public-all-trains.component';

describe('PublicAllTrainsComponent', () => {
  let component: PublicAllTrainsComponent;
  let fixture: ComponentFixture<PublicAllTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAllTrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAllTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
