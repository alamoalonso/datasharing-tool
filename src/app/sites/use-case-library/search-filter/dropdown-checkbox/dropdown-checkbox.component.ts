import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.css']
})
export class DropdownCheckboxComponent{

  @Input() dimension: string;
  @Input() characteristics: string[];

  checkedChars: string[] = [];

  @Output() checkedChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  onCharChange(charac: string) {
    const checkbox = document.getElementById(charac) as HTMLInputElement;

    if(checkbox.checked) {
      this.checkedChars.push(charac);
    } else{
      this.checkedChars = this.checkedChars.filter(char => char !== charac)
    }

    console.log(this.checkedChars);
    this.checkedChanged.emit(this.checkedChars);
  }


}
