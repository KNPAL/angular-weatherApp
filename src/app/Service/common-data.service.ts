import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  currentSearchObjSubject = new BehaviorSubject({});
  constructor() { }
}
