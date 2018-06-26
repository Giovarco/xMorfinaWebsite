import { Component, OnInit } from '@angular/core';
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

  facebookPageURL: string = environment.facebookPageURL;

  constructor(private collaboratorListService: CollaboratorListService,
              private tabOpenerService: TabOpenerService) { }

  ngOnInit() {

    this.collaboratorNames = this.collaboratorListService.getNames();

    this.collaboratorListService.getList().subscribe(data => {
      this.collaboratorList = data;
    });
    
  }

  openFacebook(): void {
    this.tabOpenerService.open(this.facebookPageURL);
  }

}
