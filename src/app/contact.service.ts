import {ContactModel} from './contact.model';

export class ContactService {
  contacts: ContactModel[] = [];
  constructor(){
    this.contacts.push(new ContactModel("test","test","test","test","test"));
    this.contacts.push(new ContactModel("test1","test","test","test","test"));
    this.contacts.push(new ContactModel("test2","test","test","test","test"));
    this.contacts.push(new ContactModel("test3","test","test","test","test"));
    this.contacts.push(new ContactModel("test4","test","test","test","test"));
    this.contacts.push(new ContactModel("test5","test","test","test","test"));
    this.contacts.push(new ContactModel("test6","test","test","test","test"));
  }
}
