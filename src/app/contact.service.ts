import {ContactModel} from './contact.model';
import {StoreProvider} from './store.provider';
import {Injectable} from '@angular/core';

@Injectable()
export class ContactService {
  contacts: ContactModel[] = [];
  constructor(private storeProvider: StoreProvider){
    this.contacts = storeProvider.getAll();
    if(this.contacts == null){
      this.contacts = [];
    }
  }

  getAllContacts():ContactModel[]{
    return this.contacts;
  }

  updateContact(index: number, contact: ContactModel):void{
    this.contacts[index] = contact;
    this.storeProvider.saveAll(this.contacts);
  }

  deleteContact(index: number){
    this.contacts.splice(index,1);
    this.storeProvider.saveAll(this.contacts);
  }

  addContact(contact: ContactModel){
    this.contacts.push(contact);
    this.storeProvider.saveAll(this.contacts);
  }
}
