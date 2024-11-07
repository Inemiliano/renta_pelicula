import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuscpComponent } from './login-suscp.component';

describe('LoginSuscpComponent', () => {
  let component: LoginSuscpComponent;
  let fixture: ComponentFixture<LoginSuscpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSuscpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSuscpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
