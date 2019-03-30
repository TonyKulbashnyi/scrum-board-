import { Component, OnInit } from '@angular/core';
import { SectionsService } from "../../services/sections.service";
import {Section} from "../../section";
import {CardService} from "../../services/card.service";
import {Card} from "../../card";


@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  cards: Array<Card> = [];
  sections: Array<Section> = [];

  constructor(private section: SectionsService,
              private card: CardService) { }

  ngOnInit() {
    this.sections = this.section.getData();
    this.cards = this.card.getCard()
  }
  onDelete(id) {
    // arr = arr.filter(val => val !== "red");
    //     // this.cards =this.cards.filter(id => id != id)
    console.log(this.cards, id)
  }

}
