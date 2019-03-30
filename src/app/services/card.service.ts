import { Injectable } from '@angular/core';
import {Card} from "../card";


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private card: Card[] = [
    new Card('task1', 'some work 1', 1),
    new Card('task2', 'some work 2', 2),
    new Card('task3', 'some work 3', 3),
    new Card('task4', 'some work 4', 1),
  ];

  getCard() {
    return this.card;
  }

  addCard(title: string, description: string, section_id: number){
    this.card.push(new Card(title, description, section_id));
    console.log(this.card);
  }

  deleteCard() {

  }

  constructor() { }
}
