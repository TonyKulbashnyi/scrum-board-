import { Injectable } from '@angular/core';

import { Section} from "../section";

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  private section: Section[] = [
    { name:"to do", id: 1},
    { name:"in progress", id: 2},
    { name:"testing", id: 3},
    { name:"done", id: 4},
  ];

  getData(): Section[] {
    return this.section;
  }

  constructor() { }
}
