import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrawingListService } from "../../services/drawing-list/drawing-list.service";
import { Drawing } from "../../interfaces/Drawing";
import { TabOpenerService } from "../../services/tab-opener/tab-opener.service";
import { environment } from "../../environments/environment";
import { DrawingsByTagFilterService } from "../../services/drawings-by-tag-filter/drawings-by-tag-filter.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None, // Needed to apply correctly .modal-dialog style
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  drawings: Drawing[] = []; // All drawings
  filteredDrawings: Drawing[] = []; // All drawings filtered by tag
  useFilteredDrawings = false;
  
  selectedDrawing: Drawing;
  selectedDrawingTags: string;

  facebookPageURL: string = environment.facebookPageURL;

  constructor(private modalService: NgbModal,
              private drawingListService: DrawingListService,
              private tabOpenerService: TabOpenerService) {}

  ngOnInit() {
    this.drawingListService.getDrawingList().subscribe( data => {
      this.drawings = data;
      DrawingListService.orderByMostRecent(this.drawings);
    });
  }

  /**
   * This function opens the drawing detail modal
   */
  openModal(content: any, drawing: Drawing) {
    const drawingTagsWithHashtag = drawing.tags.map(tag => "#" + tag);
    this.selectedDrawingTags = drawingTagsWithHashtag.join(", ");
    this.selectedDrawing = drawing;
    this.modalService.open(content);
  }

  /**
   * This function is called every time the user types on the tag INPUT
   */
  handleInputTags(event: any) {

    const inputValue: string = event.target.value;

    if ( inputValue === "" ) {
      this.useFilteredDrawings = false;
    } else {
      this.filteredDrawings = DrawingsByTagFilterService.filterByTag(this.drawings, inputValue);
      this.useFilteredDrawings = true;
    }
    
  }

  openFacebook(): void {
    this.tabOpenerService.open(this.facebookPageURL);
  }

}
