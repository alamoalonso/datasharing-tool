import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-radio',
  templateUrl: './dropdown-radio.component.html',
  styleUrls: ['./dropdown-radio.component.css']
})
export class DropdownRadioComponent {

  @Input() dimension: string;
  @Input() characteristics: string[];

  selectedChar: string;

  @Output() charChanged: EventEmitter<string> = new EventEmitter<string>();

  onCharChange(char: string) {
    this.selectedChar = char;
    this.charChanged.emit(this.selectedChar);
  }

  reset() {
    this.selectedChar = '';

    for(const charac of this.characteristics) {
      const checkbox = document.getElementById(charac) as HTMLInputElement;
      checkbox.checked = false;
    }

    this.charChanged.emit(this.selectedChar);
  }
}
