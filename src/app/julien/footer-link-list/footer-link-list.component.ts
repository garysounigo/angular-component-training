import { Component, Input, OnInit} from '@angular/core';

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
export class FooterLinkListComponent implements OnInit{
  @Input() linkList: LinkList = {
    heading: '',
    links: [],
  }

  _stateLinks: any[] = []

  get stateLinks(): any[] {
    return this._stateLinks;
  }

  set stateLinks(links: any[]){
    this._stateLinks = links
  }

  ngOnInit(){
    this.stateLinks = this.linkList.links.map( o => ({...o, hover: false}) )
  }

}

