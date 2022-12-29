import { Component, Input } from '@angular/core';
import { Usecase } from '../sites/shared/usecase.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title;

  onLogInClick() {
    Usecase.caseSimilarity(new Usecase('case1', ['adidas'], null, ['shipping'], 'link', ['type'], null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    new Usecase('case4', ['nike'], null, null, 'link', ['type'], null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null));
  }
}
