import { TestBed } from '@angular/core/testing';

import { DateNativeModalService } from './date-native-modal.service';

describe('DateNativeModalService', () => {
  let service: DateNativeModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateNativeModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
