import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";


@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  @Input() cardId:number;
  title: string;
  description: string;



  constructor(private cardService: CardService ) {}

  ngOnInit() {
  }

  addItem(){
    this.cardService.addCard(this.title, this.description, this.cardId);
    this.title = '';
    this.description = '';
  }


}
