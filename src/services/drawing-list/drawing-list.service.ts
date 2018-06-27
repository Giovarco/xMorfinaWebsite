import { Injectable } from '@angular/core';
import { Drawing } from "../../interfaces/Drawing";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
        'x-apikey': '32700fa42519f5fd2f41354f36854935a61b6'
      }
    });
  }

}
