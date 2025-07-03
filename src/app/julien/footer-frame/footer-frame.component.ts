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
  selector: 'footer-frame',
  standalone: false,
  templateUrl: './footer-frame.component.html',
  styleUrl: './footer-frame.component.css'
})
export class FooterFrameComponent {

  @Input() linkLists: LinkList[] = [
    {
      heading: 'use cases',
      links: [
        {
          label: 'UI design',
          href: '/julien',
        },
        {
          label: 'UX design',
          href: '/justin',
        },
        {
          label: 'Wireframing',
          href: '/julien',
        },
        {
          label: 'Diagramming',
          href: '/julien',
        },
        {
          label: 'Brainstorming',
          href: '/justin',
        },
        {
          label: 'Online whiteboard',
          href: '/julien',
        },
        {
          label: 'Team collaboration',
          href: '/justin',
        },
      ]
    },
    {
      heading: 'explore',
      links: [
        {
          label: 'design',
          href: '',
        },
        {
          label: 'prototyping',
          href: '',
        },
        {
          label: 'developement features',
          href: '',
        },
        {
          label: 'design systems',
          href: '',
        },
        {
          label: 'collaboration features',
          href: '',
        },
        {
          label: 'design process',
          href: '',
        },
        {
          label: 'figjam',
          href: '',
        },
      ]
    },
  ];
}
