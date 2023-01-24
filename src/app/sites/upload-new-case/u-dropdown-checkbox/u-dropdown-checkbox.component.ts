import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-u-dropdown-checkbox',
  templateUrl: './u-dropdown-checkbox.component.html',
  styleUrls: ['./u-dropdown-checkbox.component.css']
})
export class UDropdownCheckboxComponent implements OnInit{

  @Input() dimension: string;
  @Input() characteristics: string[];

  public map = new Map<string, boolean>();

  checkedChars: string[] = [];

  ngOnInit() {
    for(let char of this.characteristics){
      this.map.set(char, false);
    }
  }

  @Output() checkedChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  onCharChange(charac) {
    this.map.set(charac, !this.map.get(charac));
    if(this.map.get(charac)) {
      this.checkedChars.push(charac);
    } else{
      this.checkedChars = this.checkedChars.filter(char => char !== charac)
    }
    this.checkedChanged.emit(this.checkedChars);
  }

  reset() {
    this.checkedChars = [];

    for(const charac of this.characteristics) {
      const check = document.getElementById(charac) as HTMLInputElement;
      check.checked = false;
    }

    this.checkedChanged.emit(this.checkedChars);
  }

}
