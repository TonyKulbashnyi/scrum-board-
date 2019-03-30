export class Card{
  constructor(public title: string, public description: string, public section_id: number) {
    this.title = title;
    this.description = description;
    this.section_id = section_id;
  }
}
