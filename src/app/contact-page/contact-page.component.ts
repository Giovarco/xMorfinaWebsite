import { Component, OnInit } from '@angular/core';
import { FacebookPageOpenerService } from "../../services/facebook-page-opener/facebook-page-opener.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private facebookPageOpenerService: FacebookPageOpenerService) { }

  ngOnInit() {
  }

}
