import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  lines = [
    "I'm a passionate developer from India, interested in web development, and creating stuff using computers.",
    "When I'm not too busy, I like trying out the latest and greatest Linux distros, and experimenting with new programming languages.",
  ];
}
