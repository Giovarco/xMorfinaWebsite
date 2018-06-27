import { Injectable } from '@angular/core';
import { Drawing } from "../../interfaces/Drawing";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from "../../environments/environment";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DrawingListService {

  drawingsURL = "/rest/designs";

  static orderByMostRecent(drawings: Drawing[]): Drawing[] {

    // Sort elements
    drawings.sort(function(a, b) {

      // Get date strings
      const dateString1 = a.date;
      const dateString2 = b.date;

      // Get date objects
      const dateObject1 = new Date(a.date).getTime();
      const dateObject2 = new Date(b.date).getTime();

      // Check if these dates are not valid
      if (isNaN(dateObject1) || isNaN(dateObject2)) {
        return 0;
      }

      // Compare two dates
      if ( dateObject1 >= dateObject2 ) {
        return -1;
      } else {
        return 1;
      }

    });

    return drawings;

  }
  
  constructor(private http: HttpClient) { }

  getDrawingList(): Observable<Drawing[]> {
    return this.http.get<Drawing[]>(this.drawingsURL, {
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': environment.keys.restDB
      }
    }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  /**
   *  This function logs errors when getDrawingList() REST call fails
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was:`);
      console.error(error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
