import { Component, Input } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

interface Icon {
  href: string;
  img: Image;
}

@Component({
  selector: 'social-media-icon-panel',
  standalone: false,
  templateUrl: './social-media-icon-panel.component.html',
  styleUrl: './social-media-icon-panel.component.css'
})
export class SocialMediaIconPanelComponent {

  @Input() icons: Icon[] = [
    {
      href: "https://twitter.com",
      img: {
        src: "/img/x.svg",
        alt: "X Icon",
      }
    },
    {
      href: "https://instagram.com",
      img: {
        src: "/img/instagram.svg",
        alt: "Instagram Icon",
      }
    },
    {
      href: "https://youtube.com",
      img: {
        src: "/img/youtube.svg",
        alt: "Youtube Icon",
      }
    },
    {
      href: "https://fr.linkedin.com",
      img: {
        src: "/img/linkedin.svg",
        alt: "LinkedIn Icon",
      }
    },
  ]

}
