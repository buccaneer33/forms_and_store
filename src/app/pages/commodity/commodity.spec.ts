import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commodity } from './commodity';

describe('Commodity', () => {
  let component: Commodity;
  let fixture: ComponentFixture<Commodity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Commodity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commodity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
