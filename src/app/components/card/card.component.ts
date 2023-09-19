import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input()
	gameCover:string = "Game Title"

	@Input()
	gameLabel:string = "Game Label"

	@Input()
	gameType: string = "Type"

	@Input()
	gamePrice: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
