import { Injectable } from '@angular/core';
import { Drawing } from "../classDefinitions/Drawing";

@Injectable({
  providedIn: 'root'
})

export class DrawingListService {

  drawings: Drawing[] = [

    {
      "file" : "DarthVader.jpg",
      "title" : "Darth Cupid",
      "tags" : ["#tag1", "#tag2", "#tag3"]
    },

    {
      "file" : "Jack.jpg",
      "title" : "My name is Jack",
      "tags" : ["#tag1", "#tag2", "#tag3"]
    },

    {
      "file" : "PacificRim.jpg",
      "title" : "Red Pacifica",
      "tags" : ["#tag1", "#tag2", "#tag3"]
    },

    {
      "file" : "Pinocchio.jpg",
      "title" : "In the whale",
      "tags" : ["#tag1", "#tag2", "#tag3"]
    },

    {
      "file" : "Snoopy.jpg",
      "title" : "Chewpy",
      "tags" : ["#tag1", "#tag2", "#tag3"]
    },

    {
      "file" : "Spyro.jpg",
      "title" : "Purple Dragon",
      "tags" : ["#tag1", "#tag2", "#tag3"]
    }

  ];

  constructor() { }

  getDrawingList() {
    return this.drawings;
  }

}
