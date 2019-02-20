import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from '../contact.model';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent implements OnInit {
  @Input('curr') current: ContactModel;
  constructor() { }

  ngOnInit() {
  }

}
