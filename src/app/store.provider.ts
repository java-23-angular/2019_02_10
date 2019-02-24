import {ContactModel} from './contact.model';

export class StoreProvider {
  private static KEY = 'CONTACTS';

  saveAll(contacts: ContactModel[]):void{
    localStorage.setItem(StoreProvider.KEY,JSON.stringify(contacts));
  }

  getAll():ContactModel[]{
    return JSON.parse(localStorage.getItem(StoreProvider.KEY));
  }
}
