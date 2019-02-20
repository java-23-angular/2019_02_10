import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ContactModel} from '../contact.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  curr: ContactModel|null = null;
  constructor(public service: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((value:Params)=>{
      let index = value['index'];
      this.setCurrent(index);
      console.log(index);
    });
  }

  setCurrent(index:number):void{
    if (index < 0 || index >= this.service.contacts.length) {
      this.curr = null;
    } else {
      this.curr = this.service.contacts[index];
    }

  }

}
