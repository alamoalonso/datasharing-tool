import { Component, Input } from '@angular/core';
import { Usecase } from '../sites/shared/usecase.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title;

}
