import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  availableOptions = ['Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Goyave','Ananas','Grape','Mandarine'];
  selectedChips: string[] = [];
  inputValue = '';

  addChip(option: string) {
    if (!this.selectedChips.includes(option)) {
      this.selectedChips.push(option);
    }
    this.inputValue = '';
  }

  removeChip(index: number) {
    this.selectedChips.splice(index, 1);
  }

  filteredOptions(): string[] {
    const query = this.inputValue.toLowerCase();
    return this.availableOptions.filter(opt =>
      opt.toLowerCase().includes(query) &&
      !this.selectedChips.includes(opt)
    );
  }

  //add chip from inputValue value
  addChipsOnEnter(){
    this.addChip(this.inputValue);
  }

  //add chips with completion of the firts element choice
  addChipsOnTab(e: any){
    //Add preventDefault to avoid the event to continue
    e.preventDefault();
    if(this.filteredOptions()[0]){
      this.addChip(this.filteredOptions()[0]);
    }
   
    
  }

  //delete chips when inputValue is empty and when is at least one chip (obvious)
  deleteChipsOnBackspace() {
    if (this.inputValue.length === 0 && this.selectedChips.length > 0) {
      this.selectedChips.pop();
    }
  }
}
