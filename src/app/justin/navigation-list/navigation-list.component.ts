import { Component } from '@angular/core';

@Component({
  selector: 'navigation-list',
  standalone: false,
  templateUrl: './navigation-list.component.html',
  styleUrl: './navigation-list.component.css'
})
export class NavigationListComponent {

  activeLink: string = '';

  constructor() {}

  setActive(link: string): void {
    this.activeLink = link;
  }
}
