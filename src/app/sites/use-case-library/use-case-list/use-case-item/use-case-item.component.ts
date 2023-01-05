import { Component } from '@angular/core';
import { Usecase } from 'src/app/sites/shared/usecase.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-use-case-item',
  templateUrl: './use-case-item.component.html',
  styleUrls: ['./use-case-item.component.css']
})
export class UseCaseItemComponent {

  @Input() useCase: Usecase;
  @Input() filterCase: Usecase;

  listOrganizations() {
    return String(this.useCase.organizations);
  }

  computeFit() {
    let sim = Usecase.caseSimilarity(this.useCase, this.filterCase);
    sim = Math.round(sim * 100);

    return sim + '%'
  }
}
