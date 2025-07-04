import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-input',
  standalone: false,
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {


  @Output() value: EventEmitter<string> = new EventEmitter<string>();

  valueTextarea: string = '';
  rows : number = 1;

  resizeOnNewLine(container: HTMLElement, textArea: HTMLTextAreaElement): void {
    //textArea.style.height = 'auto';
    //textArea.style.height = `${textArea.scrollHeight}px`;
    container.style.height = `${textArea.scrollHeight+24}px`;

    
  onValue(value: any){
    this.value.emit(value);
  }

  handleKeydown(event: KeyboardEvent): void{
    if(event.key === 'Enter' && !event.shiftKey){
      event.preventDefault()

      //if not empty send value
      this.valueTextarea && this.value.emit(this.valueTextarea);
      //if send value, reset value;
      this.valueTextarea && (this.valueTextarea = '');
    }

  }

}