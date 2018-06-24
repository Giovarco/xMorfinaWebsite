import { Component, OnInit } from '@angular/core';
import { FacebookPageOpenerService } from "../../services/facebook-page-opener/facebook-page-opener.service";
import { CollaboratorListService } from "../../services/collaborator-list/collaborator-list.service";
import { TabOpenerService } from "../../services/tab-opener/tab-opener.service";
import { Names } from '../../interfaces/Names';
import { Collaborator } from '../../interfaces/Collaborator';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  collaboratorNames: Names;
  collaboratorList: Collaborator[];

  facebookPageURL = environment.facebookPageURL;

  constructor(private facebookPageOpenerService: FacebookPageOpenerService,
              private collaboratorListService: CollaboratorListService,
              private tabOpenerService: TabOpenerService) { }

  ngOnInit() {
    this.collaboratorNames = this.collaboratorListService.getNames();
    this.collaboratorList = this.collaboratorListService.getList();
  }

}
