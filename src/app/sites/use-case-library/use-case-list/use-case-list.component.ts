import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usecase } from '../../shared/usecase.model';

@Component({
  selector: 'app-use-case-list',
  templateUrl: './use-case-list.component.html',
  styleUrls: ['./use-case-list.component.css']
})
export class UseCaseListComponent {

  @Input() sortedUseCases: Usecase[];
  @Input() filterCase: Usecase;

  @Output() newFav: EventEmitter<Usecase> = new EventEmitter();
  @Output() newUnfav: EventEmitter<Usecase> = new EventEmitter();

  gotFav(usecase: Usecase) {
    this.newFav.emit(usecase);
  }

  gotUnfav(usecase: Usecase) {
    this.newUnfav.emit(usecase);
  }
}
