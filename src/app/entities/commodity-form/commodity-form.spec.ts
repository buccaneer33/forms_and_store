import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityForm } from './commodity-form';

describe('CommodityForm', () => {
  let component: CommodityForm;
  let fixture: ComponentFixture<CommodityForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommodityForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommodityForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
