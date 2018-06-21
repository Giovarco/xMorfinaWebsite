import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  drawings = [
    {
      "file" : "DarthVader.jpg",
    },
    {
      "file" : "Jack.jpg",
    },
    {
      "file" : "PacificRim.jpg",
    },
    {
      "file" : "Pinocchio.jpg",
    },
    {
      "file" : "Snoopy.jpg",
    },
    {
      "file" : "Spyro.jpg",
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
