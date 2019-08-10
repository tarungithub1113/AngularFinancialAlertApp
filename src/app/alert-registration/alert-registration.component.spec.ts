import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRegistrationComponent } from './alert-registration.component';

describe('AlertRegistrationComponent', () => {
  let component: AlertRegistrationComponent;
  let fixture: ComponentFixture<AlertRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
