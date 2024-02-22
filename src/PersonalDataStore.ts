
import { makeAutoObservable } from 'mobx';

class PersonalDataStore {
  name: string = '';
  surname: string = '';
  group: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setName(name: string) {
    this.name = name;
  }

  setSurname(surname: string) {
    this.surname = surname;
  }

  setGroup(group: string) {
    this.group = group;
  }
}

const personalDataStore = new PersonalDataStore();
export default personalDataStore;
