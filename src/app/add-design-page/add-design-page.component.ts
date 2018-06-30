import { Component, OnInit } from '@angular/core';
import { DrawingListService } from "../../services/drawing-list/drawing-list.service";
import { HttpClient } from "@angular/common/http";
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-design-page',
  templateUrl: './add-design-page.component.html',
  styleUrls: ['./add-design-page.component.css']
})

export class AddDesignPageComponent implements OnInit {

  private selectedFile: File = null;
  model: NgbDateStruct;

  constructor(private drawingListService: DrawingListService) { }

  ngOnInit() {
  }

  uploadNewDrawing() {

    // TO DO: Valitation
    
    this.drawingListService.uploadNewDrawing({
      "title" : "testTitle",
      "date" : "2018-06-28",
      "tags" : ["tag44", "tag55", "tag66"],
      "file" : this.selectedFile.name
    }, this.selectedFile)
    .subscribe( drawing => {
      console.log(drawing);
    });
    
  }

  setSelectedFile(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event.target.files[0]);
  }

}
