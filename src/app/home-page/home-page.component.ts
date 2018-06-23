import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from "../../environments/environment";
import { DrawingListService } from "../drawing-list.service";
import { Drawing } from "../../classDefinitions/Drawing";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None, // Needed to apply correctly .modal-dialog style
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  drawings: Drawing[];
  selectedDrawing: Drawing;

  constructor(private modalService: NgbModal, private drawingListService: DrawingListService) {}

  ngOnInit() {
    this.drawings = this.drawingListService.getDrawingList();
  }

  /**
   * This function opens the drawing detail modal
   */
  openModal(content, drawing: Drawing) {
    this.selectedDrawing = drawing;
    this.modalService.open(content);
  }

  openXMorfinaPage() {
    window.open(environment.facebookPageURL, '_blank');
  }

}
