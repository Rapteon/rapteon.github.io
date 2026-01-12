import { Component, input } from '@angular/core';
import { WorkItem } from '../showcase/work-item';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-exhibit',
  imports: [DatePipe],
  templateUrl: './exhibit.html',
  styleUrl: './exhibit.css',
})
export class Exhibit {
  static defaultExhibit: WorkItem = {
    title: 'Work',
    description: 'description',
    projectUrl: new URL('https://example.com'),
    type: 'public',
    startDate: new Date(Date.parse('1970-01-01')),
    endDate: null,
  };
  exhibit = input(Exhibit.defaultExhibit);
}
