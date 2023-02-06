import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usecase } from '../shared/usecase.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output() siteEmitter: EventEmitter<string> = new EventEmitter<string>();

  public firstCase: Usecase = new Usecase('A systems-approach to data can help install trust and enable a net zero future', 'The Paris Agreement, signed in 2016 under the UNFCCC, aims to limit the global average temperature increase to less than 2°C above pre-industrial levels. DNVs Energy Transition Outlook forecasts that hydrogen and Carbon Capture and Storage (CCS) will play a crucial role in reaching these climate goals. In order for the UK governments CCS business model to be successful, it will need to be profitable for the industry and have transparent data provenance. The success of the CCS and Hydrogen industries will also depend on ensuring high data quality and validating the provenance and veracity of derived data. The emergence of independent data trusts is expected to play a role in curating and extracting value from data for the benefit of stakeholders.', ['DNV', ' Open Data Institute'], {name: 'DNV', email: 'null'}, ['Energy'], '2021', 'https://www.dnv.com/publications/how-a-systems-approach-to-data-can-install-trust-and-enable-a-net-zero-future-201552', ['Environment'], ['Enriched data'], ['Generated'], null, null, ['Organizational'], null, ['Economic', 'Social & Ecological'], ['Cross-industry'], null, null, null, null, null, null, null, null, null, null, null, null);

  public otherCases: Usecase[] = [
    new Usecase('The value of sharing data in supply chain optimisation', 'In this case study, Airbus shares engineering data with its supply chain partners to improve the efficiency and accuracy of its product design as part of a project exploring the value of data sharing in the private sector. Airbus, along with its partners, has developed the Advanced Product Concept Analysis Environment (APROCONE) platform to enhance the sharing of aircraft design data and improve the integrated product design process. The platform helps improve the speed, accuracy and efficiency of the product design process and reduces development costs by enabling real-time data sharing. Benefits include improved collaboration, reduced administration costs, better cost management and increased transparency and provenance of the supply chain.', ['Airbus', ' Open Data Institute'], {name: 'Open Data Institute', email: 'info@theodi.org'}, ['Aerospace', ' Manufacturing'], '2020', 'https://docs.google.com/document/d/1B3VnH73JYE2zx1NjSivrFpvFbKWAjt5cnIbsWp98_bI/edit', ['Product', 'Process', 'Environment'], null, ['Generated'], ['Confidential'], ['Non-PII-relevant'], ['Organizational'], ['(Near-) realtime'], ['Economic', 'Social & Ecological'], ['Same industry'], ['Service', 'Financial', 'Data'], null, ['Intermediary'], ['Platform'], ['Semantic'], ['Agreement-based'], ['Continuous'], ['Primary'], ['Many-to-many'], ['Efficiency gains', 'Improved quality', 'New insights'], null, ['Intermediary-controlled']),
    new Usecase('Monitoring Human Trafficking', 'Human trafficking affects over 40 million people globally. Lack of data collaboration is a hindrance to combating human trafficking due to legal and trust barriers. Multi-party computation (MPC) can reduce these barriers and a scalable design for MPC-based data collaboration was created to improve the monitoring of sexual exploitation.', ['Sustainable Rescue', ' Pinsent Masons', ' RosemanLabs', ' Data Sharing Coalition'], {name: 'Data Sharing Coalition', email: 'info@nlaic.com'}, ['Law enforcement'], '2022', 'https://datasharingcoalition.eu/use-cases/improved-monitoring-of-human-trafficking-by-sharing-insights/', ['Human'], ['Modified data'], null, ['Sensitive'], ['PII-relevant'], ['Organizational'], ['Up-to-Date'], ['Legal'], ['Cross-industry'], ['Other', 'Data'], null, ['Service broker'], null, ['Legal', 'Organizational'], ['Agreement-based'], ['On demand'], ['Secondary'], ['Many-to-many'], ['Efficiency gains', 'New insights'], null, ['Service broker-controlled']),
    new Usecase('The value of sharing data to build trust', 'Sharing data can help businesses in building trust and credibility. A case study of the agriculture sector company Syngenta showed that it shared open data to demonstrate its commitment to being a trustworthy organization. The benefits of this approach for Syngenta have been improved reputation, better connections in adjacent sectors, and better engagement with supply chain partners. Sharing data on sustainability goals and wider research has helped Syngenta create a virtuous cycle of increased understanding, improved economic and environmental outcomes and others in the sector to share data.', ['Syngenta', ' Open Data Institute'], {name: 'Open Data Institute', email: 'info@theodi.org'}, ['Agriculture'], '2020', 'https://docs.google.com/document/d/1moXsFh2fHV6aqXWxZ1eOuKsgGZcksFPk/edit#heading=h.gjdgxs', ['Other'], ['Processed data'], ['Generated'], ['Public'], ['Non-PII-relevant'], ['Organizational'], ['Up-to-Date'], ['Social & Ecological', 'Economic'], ['Cross-industry'], ['Reputation', 'Service', 'Financial'], ['Free'], ['Intermediary'], ['Platform'], ['Semantic'], ['Open'], ['On demand'], ['End use'], ['One-to-many'], ['New insights'], null, ['Provider-controlled']),
    new Usecase('Volvo Cars', 'Volvo Cars is using ShareAspace, a secure product lifecycle management (PLM) collaboration software, to manage multiple collaboration projects, outsource complex assignments, securely share technology with other original equipment manufacturers (OEMs) and system suppliers, and easily establish and terminate collaborations. ShareAspace maintains part information and is delivered as a hosted cloud service, integrating with a variety of software to present a common view of relevant data. It allows organizations to share information securely across company borders and engineering processes, is standards-based and open, and offers a fast return on investment.', ['Volvo', ' ShareAspace '], {name: 'ShareAspace', email: 'info@eurostep.com'}, ['Automotive', ' Manufacturing'], '2021', 'https://www.eurostep.com/volvo-cars-handling-product-data-management-to-streamline-collaboration-between-organisations/', ['Process', 'Product'], null, ['Generated'], ['Confidential'], ['Non-PII-relevant'], ['Organizational'], ['Up-to-Date'], ['Economic'], ['Same industry'], ['Financial', 'Service'], null, ['Service broker'], ['Closed API'], ['Semantic', 'Organizational'], ['Agreement-based'], ['On demand'], ['Primary'], ['Many-to-many'], ['Efficiency gains'], null, ['Service broker-controlled']),
  ];

  newCase(list: Usecase[]){
    list.splice(0, 1);
    this.otherCases = list;
  }

  help(){
    this.siteEmitter.emit("Help");
  }

  library(){
    this.siteEmitter.emit("Use Case Library");
  }

  new(){
    this.siteEmitter.emit("Upload new Case");
  }
}
