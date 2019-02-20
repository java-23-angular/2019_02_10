import {ContactModel} from './contact.model';

export class ContactService {
  contacts: ContactModel[] = [];
  constructor(){
    this.contacts.push(new ContactModel("test","test","test","test","test"));
  }
}
