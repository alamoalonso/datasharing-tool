import { Component, EventEmitter, Output } from '@angular/core';
import { Usecase } from '../shared/usecase.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  public favUsecases: Usecase[] = [];
  public myUsecases: Usecase[] = [];

  @Output() deleteCase: EventEmitter<Usecase> = new EventEmitter();

  public deleteFavCase(usecase: Usecase){
    const index = this.favUsecases.indexOf(usecase, 0);
    if(index > -1) {
      this.favUsecases.splice(index, 1);
    }
  }

  public deleteMyCase(usecase: Usecase){
    const index = this.myUsecases.indexOf(usecase, 0);
    if(index > -1) {
      this.myUsecases.splice(index, 1);
      this.deleteCase.emit(usecase);
    }
  }
}
