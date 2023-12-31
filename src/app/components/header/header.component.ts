import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  get navbarButtonClass() {
    return this.isOpen ? '' : 'hidden';
  }
}
