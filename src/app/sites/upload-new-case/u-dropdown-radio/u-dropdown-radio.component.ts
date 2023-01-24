import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-u-dropdown-radio',
  templateUrl: './u-dropdown-radio.component.html',
  styleUrls: ['./u-dropdown-radio.component.css']
})
export class UDropdownRadioComponent {

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
