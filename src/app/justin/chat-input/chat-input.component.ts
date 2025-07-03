import { Component } from '@angular/core';

@Component({
  selector: 'chat-input',
  standalone: false,
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  th : number = 0;
  ch : number = 0;
  tsc : number = 0;
  csc : number = 0;
  tsh : number = 0;
  rows : number = 1;
  resize(textarea: HTMLTextAreaElement, container: HTMLElement): void {
    this.th = textarea.getBoundingClientRect().height; 
    this.ch = container.getBoundingClientRect().height;
    this.tsc = textarea.scrollHeight;
    this.csc = container.scrollHeight;

    if( textarea.scrollHeight > Number(textarea.style.height.replace('px', '')) ) {
    // Set height to scrollHeight to expand as needed
      // container.style.height = `${textarea.scrollHeight + 24}px`;
      // textarea.style.height = `${textarea.scrollHeight + 24}px`;
      this.rows ++;
    this.th = textarea.getBoundingClientRect().height; 
    this.ch = container.getBoundingClientRect().height;
    this.tsc = textarea.scrollHeight;
    this.csc = container.scrollHeight;
    this.tsh = Number(textarea.style.height.replace('px', ''));

    }
  }
}