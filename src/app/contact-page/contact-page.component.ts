import { Component, OnInit } from '@angular/core';
import { FacebookPageOpenerService } from "../../services/facebook-page-opener/facebook-page-opener.service";
import { CollaboratorListService } from "../../services/collaborator-list/collaborator-list.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  collaboratorNames;
  collaboratorList;
  
  constructor(private facebookPageOpenerService: FacebookPageOpenerService,
              private collaboratorListService: CollaboratorListService) { }

  ngOnInit() {
    this.collaboratorNames = this.collaboratorListService.getNames();
    this.collaboratorList = this.collaboratorListService.getList();
  }

}
