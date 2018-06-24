import { Injectable } from '@angular/core';
import { Drawing } from "../../interfaces/Drawing";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DrawingListService {

  drawingsURL = "/assets/data/drawings.json";

  constructor(private http: HttpClient) { }

  getDrawingList(): Observable<Drawing[]> {
    return this.http.get<Drawing[]>(this.drawingsURL);
  }

}
