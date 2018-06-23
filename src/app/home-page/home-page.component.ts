import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None, // Needed to apply correctly .modal-dialog style
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  drawings = [

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

  selectedDrawing;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openModal(content, drawing) {
    this.selectedDrawing = drawing;
    this.modalService.open(content);
  }

  openXMorfinaPage() {
    window.open('https://www.facebook.com/XMorfinas-World-1553283851576465/', '_blank');
  }

}
