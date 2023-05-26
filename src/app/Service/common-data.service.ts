import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  currentSearchObjSubject = new BehaviorSubject(null);
  profileList: any[] = [];
  constructor() {}

  setProfileList(list: any) {
    return this.profileList.push(list);
  }

  getProfileList() {
    return this.profileList;
  }
}
