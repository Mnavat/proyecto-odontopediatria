import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesdetailComponent } from './datesdetail.component';

describe('DatesdetailComponent', () => {
  let component: DatesdetailComponent;
  let fixture: ComponentFixture<DatesdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatesdetailComponent]
    });
    fixture = TestBed.createComponent(DatesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
