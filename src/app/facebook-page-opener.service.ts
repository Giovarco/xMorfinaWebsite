import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class FacebookPageOpenerService {

  constructor() { }

  open() {
    window.open(environment.facebookPageURL, '_blank');
  }

}
