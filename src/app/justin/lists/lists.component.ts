import { Component, Input, HostBinding, input } from '@angular/core';



@Component({
  selector: 'lists',
  standalone: false,
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  // @HostBinding('class.drop') @Input() drop: boolean = false;
  @Input() drop: boolean = false;
  @Input() direction: string = 'vertical';
  @Input() side: string = 'right';
  @Input() title: string = '';

  @HostBinding('style.position') get position() {
    return this.drop ? 'absolute' : 'relative';
  }
  @HostBinding('style.left') get left() {
    return this.drop && this.side === 'right' ? '256px' : '0px';
  }
  @HostBinding('style.top') get top() {
    return this.drop && this.side === 'bottom' ? '100px' : '0px';
  }
}