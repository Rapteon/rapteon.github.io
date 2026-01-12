import { Component } from '@angular/core';
import { WorkItem } from './work-item';
import { Exhibit } from '../exhibit/exhibit';

@Component({
  selector: 'app-showcase',
  imports: [Exhibit],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  exhibits: Array<WorkItem>;
  constructor() {
    this.exhibits = [
      {
        title: 'Archcraft OS',
        description: 'Updated documentation for links to SHA256 and GPG files in new release.',
        projectUrl: new URL('https://github.com/archcraft-os/archcraft-os.github.io/pull/23'),
        type: 'public',
        startDate: new Date(Date.parse('2021-11-01')),
        endDate: new Date(Date.parse('2021-11-11')),
      },
      {
        imageUrl: 'images/showcase/qry.jpg',
        title: 'QRy',
        description:
          'A QR code generator optimised for mobile use. Uses the angularx-qrcode library.',
        projectUrl: new URL('https://github.com/Rapteon/Qry'),
        demoUrl: new URL('https://rapteon.github.io/Qry'),
        type: 'private',
        startDate: new Date('2022-11-10'),
        endDate: new Date('2022-11-12'),
      },
      {
        title: 'Marky',
        description: `An online Markdown editor app with clickable buttons to easily format text
content. Uses markd.js library for rendering and generating Markdown from text.`,
        projectUrl: new URL('https://github.com/Rapteon/Marky'),
        demoUrl: new URL('https://rapteon.github.io/marky'),
        type: 'private',
        startDate: new Date(Date.parse('2022-09-24')),
        endDate: new Date(Date.parse('2022-11-05')),
      },
      {
        title: 'Vakk',
        description:
          'An online dictionary app using the Wordnik API to search for the meanings of English words.',
        projectUrl: new URL('https://github.com/Rapteon/vakk'),
        type: 'private',
        startDate: new Date(Date.parse('2022-10-30')),
        endDate: new Date(Date.parse('2022-11-05')),
      },
      {
        title: 'Keyboe',
        description: `An web application to generate boilerplate code for handling keyboard events in Angular. Displays
the keys pressed by the user, including modifier keys like Shift and Ctrl
and generates TypeScript and template code`,
        projectUrl: new URL('https://github.com/Rapteon/keyboe'),
        demoUrl: new URL('https://rapteon.github.io/keyboe'),
        type: 'private',
        startDate: new Date(Date.parse('2023-03-07')),
        endDate: new Date(Date.parse('2023-04-08')),
      },
      {
        imageUrl: 'images/showcase/hungmath.jpg',
        title: 'Hungmath',
        description: `A variant of the classic hangman game about solving math expressions instead of guessing words.`,
        projectUrl: new URL('https://github.com/Rapteon/hungmath'),
        demoUrl: new URL('https://rapteon.github.io/hungmath'),
        type: 'private',
        startDate: new Date(Date.parse('2023-04-09')),
        endDate: new Date(Date.parse('2023-04-28')),
      },
      {
        title: 'Campus Cookbook',
        description: `A web app for creating and sharing recipes created as part of my academic work.`,
        projectUrl: new URL('https://github.com/Rapteon/thecampuscookbook'),
        type: 'private',
        startDate: new Date(Date.parse('2025-02-19')),
        endDate: new Date(Date.parse('2025-03-27')),
      },
      {
        title: 'Project Chimera',
        description: `Added support for new command line parameter which avoids the problem of
hardcoded simulation lengths while benchmarking agents.`,
        projectUrl: new URL('https://github.com/akarlaraytu/Project-Chimera/pull/43'),
        type: 'public',
        startDate: new Date(Date.parse('2025-09-25')),
        endDate: new Date(Date.parse('2025-09-27')),
      },
      {
        title: 'PyPDF library',
        description: `Added support for variable fonts in PyPDF library. Variable fonts allow
the use of a single font file for variations like italics, bold text and different font weights.`,
        projectUrl: new URL('https://github.com/py-pdf/fpdf2/pull/1607'),
        type: 'public',
        startDate: new Date(Date.parse('2025-09-25')),
        endDate: new Date(Date.parse('2025-10-29')),
      },
    ];
    this.sortExhibits();
  }

  sortExhibits() {
    // Sort exhibits in descending order of startTime.
    this.exhibits.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }
}
