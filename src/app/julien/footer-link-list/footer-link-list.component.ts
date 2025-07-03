import { Component, Input } from '@angular/core';

interface Link {
  label: string;
  href: string;
}

interface LinkList {
  heading: string;
  links: Link[];
}

@Component({
  selector: 'footer-link-list',
  standalone: false,
  templateUrl: './footer-link-list.component.html',
  styleUrl: './footer-link-list.component.css'
})
export class FooterLinkListComponent {
  @Input() linkList: LinkList = {
    heading: '',
    links: [],
  }

  get stateLinks(): any[] {
    return [...this.linkList.links].map(o => ({...o, hover: false}))
  }
}

