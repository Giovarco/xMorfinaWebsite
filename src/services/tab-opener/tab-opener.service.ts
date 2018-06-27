import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabOpenerService {

  constructor() { }

  open(link: string) {
    window.open(link, '_blank');
  }

}
