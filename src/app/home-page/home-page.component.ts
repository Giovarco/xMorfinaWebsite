import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrawingListService } from "../../services/drawing-list/drawing-list.service";
import { Drawing } from "../../classDefinitions/Drawing";
import { FacebookPageOpenerService } from "../../services/facebook-page-opener/facebook-page-opener.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None, // Needed to apply correctly .modal-dialog style
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  drawings: Drawing[];
  selectedDrawing: Drawing;

  constructor(private modalService: NgbModal,
              private drawingListService: DrawingListService,
              private facebookPageOpenerService: FacebookPageOpenerService) {}

  ngOnInit() {
    this.drawings = this.drawingListService.getDrawingList();
  }

  /**
   * This function opens the drawing detail modal
   */
  openModal(content: any, drawing: Drawing) {
    this.selectedDrawing = drawing;
    this.modalService.open(content);
  }

}
