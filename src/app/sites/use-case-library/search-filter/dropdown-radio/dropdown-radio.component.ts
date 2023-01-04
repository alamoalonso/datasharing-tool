import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-radio',
  templateUrl: './dropdown-radio.component.html',
  styleUrls: ['./dropdown-radio.component.css']
})
export class DropdownRadioComponent {

  @Input() dimension: string;
  @Input() characteristics: string[];

}
