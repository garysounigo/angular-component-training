import { Component, Input, HostBinding, } from '@angular/core';



@Component({
  selector: 'lists',
  standalone: false,
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  // @HostBinding('class.drop') @Input() drop: boolean = false;
  @Input() drop: boolean = false;
  //@Input() direction: string = 'vertical';
  @Input() side: string = 'right';
  @Input() title: string = '';
  @Input() clickPos: {x:number;y:number} = {x: 0, y:0};
  @Input() strategy: 'click' | 'side' = 'click';

  @HostBinding('style.position') get position() {
    return this.drop ? 'absolute' : 'relative';
  }
  @HostBinding('style.left') get left() {
    return this.drop && 
            (
              this.strategy === 'click' && `${this.clickPos.x+20}px` || 
              (this.strategy === 'side' &&
                this.side === 'right' ? '256px' : 'unset'
              )
            );
  }
  @HostBinding('style.top') get top() {
    return this.drop && 
            (
              this.strategy === 'click' && `${this.clickPos.y+20}px` || 
              (this.strategy === 'side' &&
                this.side === 'bottom' ? '100px' : 'unset'
              )
            );

  }
}