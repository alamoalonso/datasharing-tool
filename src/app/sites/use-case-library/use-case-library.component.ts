import { Component, Input } from '@angular/core';
import { Usecase } from '../shared/usecase.model';

@Component({
  selector: 'app-use-case-library',
  templateUrl: './use-case-library.component.html',
  styleUrls: ['./use-case-library.component.css']
})
export class UseCaseLibraryComponent {

  useCases: Usecase[] = [
    new Usecase('Secondary Use Health Data', ['Open Data Institute'], {name: 'Mark Boyd', email:'policy@theodi.org'}, ['Health'], '2021', null, ['Other'], ['Processed data'], ['Generated'], ['Sensitive'], ['PII-relevant'], ['Individual'], ['Static', 'Up-to-date', '(Near-) realtime'], ['Social & Ecological', 'Economic'], ['Same industry'], ['Service', 'Data'], null, null, null, ['Legal', 'Organizational', 'Semantic', 'Technical'], null, ['Continuous'], ['Secondary'], ['Many-to-many'], ['Efficiency gains', 'Improved quality', 'New insights', 'New offerings'], null, null)
  ];
  sortedCases: Usecase[] = this.useCases;
  filCase: Usecase;

  updateFilCase(event: Usecase) {
    this.filCase = event;
    this.updateSortedCases;
  }

  updateSortedCases() {
    this.sortedCases = this.useCases;
    this.sortedCases.sort(function compare(a: Usecase, b: Usecase) {
      if(Usecase.caseSimilarity(a, this.filCase) < Usecase.caseSimilarity(b, this.filCase)){
        return -1;
      }
      if(Usecase.caseSimilarity(a, this.filCase) > Usecase.caseSimilarity(b, this.filCase)){
        return 1;
      } else{
        return 0;
      }
    })
  }

}
