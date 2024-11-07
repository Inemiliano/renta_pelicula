import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForComponent } from './login-for.component';

describe('LoginForComponent', () => {
  let component: LoginForComponent;
  let fixture: ComponentFixture<LoginForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
