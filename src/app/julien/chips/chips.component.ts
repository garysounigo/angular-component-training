import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chips',
  standalone: false,
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent { 
  
  @Input("icon") icon: string = ""; 
  @Input("label") label: string = "";
  @Input("padding") padding: number = 15;
  @Input("iconrt") iconrt: string = ""; 
  @Input("color") color: string = "#777777";
  @Input("bckColor") bckColor: string = "#f3f3f3";
  @Input("radius") radius: number = 16;
  hover: boolean = false;

  @Output() value: EventEmitter<string> = new EventEmitter<string>();

  onValue(): void{
    this.value.emit(this.label);
  }

  calculatePadding(): string {
    return `${this.padding*6/15}px`;
  }
}
