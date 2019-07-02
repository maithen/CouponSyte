import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  public title = new BehaviorSubject('Home');
  constructor() { }

  setTitle(title) {
    this.title.next(title);
  }
}
