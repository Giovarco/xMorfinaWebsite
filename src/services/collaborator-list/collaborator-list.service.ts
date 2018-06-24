import { Injectable } from '@angular/core';
import { Collaborator } from "../../interfaces/Collaborator";
import { Names } from "../../interfaces/Names";

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
  
  list: Collaborator[] = [
    {
      "name" : CollaboratorListService.names.Qwertee,
      "website" : "https://www.qwertee.com/",
      "logoFile" : CollaboratorListService.names.Qwertee + ".png"
    },
    {
      "name" : CollaboratorListService.names.TeeTee,
      "website" : "https://www.teetee.eu/en/",
      "logoFile" : CollaboratorListService.names.TeeTee + ".png"
    },
    {
      "name" : CollaboratorListService.names.Pampling,
      "website" : "https://www.pampling.com",
      "logoFile" : CollaboratorListService.names.Pampling + ".png"
    },
    {
      "name" : CollaboratorListService.names.Wistitee,
      "website" : "https://www.wistitee.com/en/",
      "logoFile" : CollaboratorListService.names.Wistitee + ".png"
    },
    {
      "name" : CollaboratorListService.names.Othertees,
      "website" : "https://www.othertees.com/",
      "logoFile" : CollaboratorListService.names.Othertees + ".png"
    },
    {
      "name" : CollaboratorListService.names.TeeFury,
      "website" : "https://teefury.com",
      "logoFile" : CollaboratorListService.names.TeeFury + ".png"
    },
    {
      "name" : CollaboratorListService.names.ShirtPunch,
      "website" : "https://www.shirtpunch.com",
      "logoFile" : CollaboratorListService.names.ShirtPunch + ".png"
    },
    {
      "name" : CollaboratorListService.names.RIPTapparel,
      "website" : "",
      "logoFile" : CollaboratorListService.names.RIPTapparel + ".png"
    },
    {
      "name" : CollaboratorListService.names.TheYeTee,
      "website" : "https://theyetee.com/",
      "logoFile" : CollaboratorListService.names.TheYeTee + ".png"
    },
    {
      "name" : CollaboratorListService.names.TeeVillain,
      "website" : "https://www.teevillain.com/",
      "logoFile" : CollaboratorListService.names.TeeVillain + ".png"
    },
    {
      "name" : CollaboratorListService.names.TeeTribe,
      "website" : "https://teetribe.eu",
      "logoFile" : CollaboratorListService.names.TeeTribe + ".png"
    },
    {
      "name" : CollaboratorListService.names.TeeCraze,
      "website" : "https://teecraze.com/",
      "logoFile" : CollaboratorListService.names.TeeCraze + ".png"
    },
    {
      "name" : CollaboratorListService.names.RedBubble,
      "website" : "https://www.redbubble.com",
      "logoFile" : CollaboratorListService.names.RedBubble + ".png"
    },
    {
      "name" : CollaboratorListService.names.Loopslike,
      "website" : "https://www.loopslike.com/en",
      "logoFile" : CollaboratorListService.names.Loopslike + ".png"
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
