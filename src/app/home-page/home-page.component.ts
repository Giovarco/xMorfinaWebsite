import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  closeResult: string;
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

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  
  open(content) {
    this.modalService.open(content);
  }
  
}
