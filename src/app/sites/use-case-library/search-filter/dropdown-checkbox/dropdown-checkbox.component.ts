import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.css']
})
export class DropdownCheckboxComponent {

  @Input() dimension: string;
  @Input() characteristics: string[];

}
