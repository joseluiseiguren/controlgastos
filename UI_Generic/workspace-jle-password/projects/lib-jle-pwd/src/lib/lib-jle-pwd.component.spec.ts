import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibJlePwdComponent } from './lib-jle-pwd.component';

describe('LibJlePwdComponent', () => {
  let component: LibJlePwdComponent;
  let fixture: ComponentFixture<LibJlePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibJlePwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibJlePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
