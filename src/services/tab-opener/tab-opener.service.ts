import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabOpenerService {

  constructor() { }

  open(link) {
    window.open(link, '_blank');
  }

}
