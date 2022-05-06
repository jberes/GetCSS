import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { JSONNorthwindOrdersService } from './json-northwind-orders.service';

describe('JSONNorthwindOrdersService', () => {
  let service: JSONNorthwindOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JSONNorthwindOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
