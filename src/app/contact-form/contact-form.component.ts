import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {ContactModel} from '../contact.model';
import {timer} from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';

  isShowDanger: boolean = false;
  isShowSuccess: boolean = false;

  constructor(private service: ContactService) {
  }

  ngOnInit() {
  }

  addContactClick(): void {
    let curr: ContactModel = new ContactModel(this.name,
      this.lastName, this.phone, this.email, this.address);
    for (let c of this.service.contacts) {
      if (c.email === curr.email) {
        this.isShowDanger = true;
        setTimeout(() => {
          this.isShowDanger = false;
        }, 2000);
        return;
      }
    }
    // this.service.contacts.push(curr);
    this.service.addContact(curr);
    this.isShowSuccess = true;
    setTimeout(() => {
      this.isShowSuccess = false;
    }, 2000);
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }
}
