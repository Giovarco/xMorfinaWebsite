import { Injectable } from '@angular/core';
import { Collaborator } from "../../interfaces/Collaborator";
import { Names } from "../../interfaces/Names";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CollaboratorListService {

  static names: Names = {
    "Qwertee" : "Qwertee",
    "TeeTee" : "TeeTee",
    "Pampling" : "Pampling",
    "Wistitee" : "Wistitee",
    "Othertees" : "Othertees",
    "TeeFury" : "TeeFury",
    "ShirtPunch" : "ShirtPunch",
    "RIPTapparel" : "RIPTapparel",
    "TheYeTee" : "TheYeTee",
    "TeeVillain" : "TeeVillain",
    "TeeTribe" : "TeeTribe",
    "TeeCraze" : "TeeCraze",
    "RedBubble" : "RedBubble",
    "Loopslike" : "Loopslike"
  };
  
  collaboratorListURL = "/assets/data/collaboratorsList.json";
  list: Collaborator[];

  constructor(private http: HttpClient) { }

  getList(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.collaboratorListURL);
  }

  getNames(): Names {
    return CollaboratorListService.names;
  }
  
}
