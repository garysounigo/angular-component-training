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
  selector: 'social-media-icon',
  standalone: false,
  templateUrl: './social-media-icon.component.html',
  styleUrl: './social-media-icon.component.css'
})
export class SocialMediaIconComponent {

  @Input() icon: Icon = {
    href: '',
    img: {
      src: '',
      alt: '',
    }
  };

}
