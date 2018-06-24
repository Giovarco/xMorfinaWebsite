import { Injectable } from '@angular/core';
import { Collaborator } from "../../interfaces/Collaborator";
import { Names } from "../../interfaces/Names";

@Injectable({
  providedIn: 'root'
})

export class CollaboratorListService {

  static names: Names = {
    "TeeTee" : "TeeTee",
    "TeeFury" : "TeeFury"
  };
  
  list: Collaborator[] = [
    {
      "name" : CollaboratorListService.names.TeeTee,
      "website" : "https://www.teetee.eu/en/",
      "logoFile" : "TeeTee.png"
    },
    {
      "name" : CollaboratorListService.names.TeeFury,
      "website" : "https://teefury.com",
      "logoFile" : "TeeFury2.png"
    }
  ];

  constructor() { }

  getList(): Collaborator[] {
    return this.list;
  }

  getNames(): Names {
    return CollaboratorListService.names;
  }
  
}
