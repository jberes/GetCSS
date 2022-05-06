import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { JSONNorthwindCustomersService } from './json-northwind-customers.service';

describe('JSONNorthwindCustomersService', () => {
  let service: JSONNorthwindCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JSONNorthwindCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
