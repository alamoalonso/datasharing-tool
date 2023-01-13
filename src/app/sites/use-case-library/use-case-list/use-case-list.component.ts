import { Component, Input } from '@angular/core';
import { Usecase } from '../../shared/usecase.model';

@Component({
  selector: 'app-use-case-list',
  templateUrl: './use-case-list.component.html',
  styleUrls: ['./use-case-list.component.css']
})
export class UseCaseListComponent {

  @Input() sortedUseCases: Usecase[];
  @Input() filterCase: Usecase;

}