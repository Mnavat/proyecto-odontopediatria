import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesofferComponent } from './servicesoffer.component';

describe('ServicesofferComponent', () => {
  let component: ServicesofferComponent;
  let fixture: ComponentFixture<ServicesofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesofferComponent]
    });
    fixture = TestBed.createComponent(ServicesofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
