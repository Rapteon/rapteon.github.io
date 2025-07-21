import { Component } from '@angular/core';
import { Card } from '../card/card';

interface CardInfo {
  name: string;
  description: string;
  imagePath: string;
  sourceCodeURL: string;
}

@Component({
  selector: 'app-projects',
  imports: [Card],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Array<CardInfo> = [
    {
      name: 'Qry',
      description:
        'A QR code generator for UPI, VCard, or for any random text.',
      imagePath: 'assets/images/projects/qry.png',
      sourceCodeURL: 'https://github.com/Rapteon/Qry',
    },
  ];
}
