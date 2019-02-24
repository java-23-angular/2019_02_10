import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ContactModel} from '../contact.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  curr: ContactModel | null = null;
  currCopy: ContactModel | null = null;
  private index: number = -1;
  isEditMode: boolean = false;

  constructor(public service: ContactService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((value: Params) => {
      this.index = value['index'];
      this.setCurrent(this.index);
      console.log(this.index);
    });
  }

  setCurrent(index: number): void {
    if (index < 0 || index >= this.service.contacts.length) {
      this.curr = null;
    } else {
      this.curr = this.service.contacts[index];
    }
  }

  onEditClick() {
    this.currCopy = new ContactModel(
      this.curr.name,
      this.curr.lastName,
      this.curr.phone,
      this.curr.email,
      this.curr.address
    );
    this.isEditMode = true;
  }

  onSaveClick() {
    this.curr = this.currCopy;
    this.service.contacts[this.index] = this.curr;
    this.isEditMode = false;
  }

  OnCancelClick() {
    this.currCopy = null;
    this.isEditMode = false;
  }
}
