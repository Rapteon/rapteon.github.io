import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  name = input<string>();
  description = input<string>();
  imagePath = input<string>();
  sourceCodeURL = input<string>();
}
