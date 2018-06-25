import { Injectable } from '@angular/core';
import { Drawing } from '../../interfaces/Drawing';

@Injectable({
  providedIn: 'root'
})
export class DrawingsByTagFilterService {

  constructor() { }

  static filterByTag(drawings: Drawing[], inputFilter: string): Drawing[] {
    return [
      {
          "file" : "DarthVader.jpg",
          "title" : "Darth Cupid",
          "tags" : ["tag1", "tag2", "tag3"],
          "date" : "2018-01-01"
      },
  
      {
          "file" : "Jack.jpg",
          "title" : "My name is Jack",
          "tags" : ["tag1", "tag2", "tag3"],
          "date" : "2018-01-04"
      }
    ];
  }
}
