import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  logoPath = 'assets/images/logo.png';
  quoteWords = 'Always write clean code.'.split(' ');
  name = 'Suraj Naranatt';
}
