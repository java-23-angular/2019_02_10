import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public service: ContactService, private router: Router) { }

  ngOnInit() {
  }

  goToAdd() {
    this.router.navigate(['/add']);
  }
}
