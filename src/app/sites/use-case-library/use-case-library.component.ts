import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Usecase } from '../shared/usecase.model';

@Component({
  selector: 'app-use-case-library',
  templateUrl: './use-case-library.component.html',
  styleUrls: ['./use-case-library.component.css']
})
export class UseCaseLibraryComponent{


  useCases: Usecase[] = [
    new Usecase('Secondary Use Health Data', 'The report, researched and produced by the Open Data Institute (ODI), focuses on the importance of secondary use of health data in Europe to help respond to the many urgent challenges facing society and economy today. It states that by reusing health data in different ways, we can increase the value of this data and help to enable improvements in population health, more efficient healthcare systems, and foster innovation. The report identifies 22 key policy components needed to achieve a trusted and trustworthy data ecosystem and provides an evaluation of the quality of policy activity for each component. The report is independent work by the ODI that was commissioned by Roche.',['Open Data Institute'], {name: 'Mark Boyd', email:'policy@theodi.org'}, ['Health'], '2021', null, ['Other'], ['Processed data'], ['Generated'], ['Sensitive'], ['PII-relevant'], ['Individual'], ['Static', 'Up-to-date', '(Near-) realtime'], ['Social & Ecological', 'Economic'], ['Same industry'], ['Service', 'Data'], null, null, null, ['Legal', 'Organizational', 'Semantic', 'Technical'], null, ['Continuous'], ['Secondary'], ['Many-to-many'], ['Efficiency gains', 'Improved quality', 'New insights', 'New offerings'], null, null),
    new Usecase('Smart Cleaning', 'The use case is about smart cleaning and it discusses the agreements that are needed to support it. These agreements are necessary when scaling the use case to more data sources, actors, and applications of the data. These agreements are needed to ensure trust and interoperability between actors. The use case also mentions that in order to enable a scalable and interoperable system, agreements between actors need to be co-created, updated, and actors’ adherence to these agreements must be monitored. Additionally, the use case mentions that with more actors, sensors, and applications of data, a more granular restriction of access will be required, as not all actors should receive all data.',['Data Sharing Coalition', 'FacilityApps', 'AMdEX'], {name: 'Data Sharing Coalition', email: 'info@datasharingcoalition.eu'}, ['Facility Management'], '2021', ' ', ['Process'], ['Processed data'], ['Customer-provided'], ['Confidential'], ['Non-PII-relevant'], ['Organizational'], ['(Near-) realtime'], ['Economic'], ['Cross-industry'], ['Financial'], null, ['Data consumer'], ['Closed API'], ['Technical'], ['Agreement-based'], ['Continuous'], ['Primary'], ['Many-to-one'], ['Efficiency gains'], ['Consumer-initiated'], ['Consumer-controlled'])
  ];
  sortedCases: Usecase[] = this.useCases;
  filCase: Usecase = new Usecase(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)

  updateFilCase(filCase: Usecase) {
    this.filCase = filCase;
    this.updateSortedCases();
  }

  updateSortedCases() {
    this.sortedCases = this.useCases;
    const fc = this.filCase;
    this.sortedCases = this.sortedCases.sort(function compare(a: Usecase, b: Usecase) {
      if(Usecase.caseSimilarity(a, fc) < Usecase.caseSimilarity(b, fc)){
        return 1;
      }
      if(Usecase.caseSimilarity(a, fc) > Usecase.caseSimilarity(b, fc)){
        return -1;
      } else{
        return 0;
      }
    })

  }

}
