import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MmodalDateMonthComponent } from './mmodal-date-month.component';

describe('MmodalDateMonthComponent', () => {
  let component: MmodalDateMonthComponent;
  let fixture: ComponentFixture<MmodalDateMonthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MmodalDateMonthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MmodalDateMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
