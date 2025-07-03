import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lists-item',
  standalone: false,
  templateUrl: './lists-item.component.html',
  styleUrl: './lists-item.component.css'
})
export class ListsItemComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() count: number = 0;
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() imgSrcRight: string = '';
  @Input() imgAltRight: string = '';
  // @Input() shadow: string = '0px 4px 8px #000000';
  // @Input() hoverShadow: string = '0px 8px 16px #000000';
  hover: boolean = false;
  @Input() click: boolean = false;
  @Input() size: number = 18;
  @Input() color: string = 'black';
  @Input() backgroundColor: string = '#f3f3f3';
  @Output() itemClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    this.click = !this.click;
    this.itemClick.emit(event);
  }
}
