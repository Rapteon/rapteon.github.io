import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  city: string = 'Pune';
  country: string = 'India';
  name: string = 'Suraj Naranatt'
  role: string = 'Junior Software Engineer'
  private getEmail() {
    const atTheRate = '@';
    return 'rapteon' + atTheRate + 'tutanota.com';
  }
  emailClicked(event: Event) {
    event.preventDefault();
    location.href = 'mailto:' + this.getEmail();
  }
}
