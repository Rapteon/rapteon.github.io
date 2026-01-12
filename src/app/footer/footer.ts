import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  copyrightYear: number;
  constructor() {
    this.copyrightYear = new Date(Date.now()).getUTCFullYear();
  }
}
