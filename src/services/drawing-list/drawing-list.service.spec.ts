import { TestBed, inject } from '@angular/core/testing';
import { DrawingListService } from './drawing-list.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Drawing } from "../../interfaces/Drawing";

describe('DrawingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawingListService]
    });
  });

  it('should be created', inject([DrawingListService], (service: DrawingListService) => {
    expect(service).toBeTruthy();
  }));
});





describe('HttpClient testing', () => {
  
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testUrl: string;
  let expectedDrawings: Drawing[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    testUrl = "/assets/data/drawings.json";
    expectedDrawings = [
      {
          "file" : "DarthVader.jpg",
          "title" : "Darth Cupid",
          "tags" : ["tag22", "tag33"],
          "date" : "2018-01-01"
      },
  
      {
          "file" : "Jack.jpg",
          "title" : "My name is Jack",
          "tags" : ["tag11", "tag33"],
          "date" : "2018-01-04"
      },
  
      {
          "file" : "PacificRim.jpg",
          "title" : "Red Pacifica",
          "tags" : ["tag11", "tag22"],
          "date" : "2018-01-02"
      },
  
      {
          "file" : "Pinocchio.jpg",
          "title" : "In the whale",
          "tags" : ["tag22", "tag33"],
          "date" : "2018-01-05"
      },
  
      {
          "file" : "Snoopy.jpg",
          "title" : "Chewpy",
          "tags" : ["tag11", "tag33"],
          "date" : "2018-01-03"
      },
  
      {
          "file" : "Spyro.jpg",
          "title" : "Purple Dragon",
          "tags" : ["tag11", "tag22"],
          "date" : "2018-01-06"
      }
    ];
  
  });




  /// Tests begin ///
  it('can test HttpClient.get', () => {
  
    // Make an HTTP GET request
    httpClient.get<Drawing[]>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(expectedDrawings)
      );
  
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testUrl);
  
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(expectedDrawings);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();

  });


});
