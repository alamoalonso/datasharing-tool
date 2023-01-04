import { Component, EventEmitter, Output } from '@angular/core';
import { Usecase } from '../../shared/usecase.model';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {

  public title = null;
  public organizations = null;
  public industries = null;
  public year_of_publication = null;
  public type: string[] | null = null;
  public maturity_of_processing: string[] | null = null;
  public source: string[] | null = null;
  public privacy: string[] | null = null;
  public pii_relevance: string[] | null = null;
  public sovereignitiy: string[] | null = null;
  public timeframe: string[] | null = null;
  public motivation: string[] | null = null;
  public scope: string[] | null = null;
  public reward: string[] | null = null;
  public payment_model: string[] | null = null;
  public role: string[] | null = null;
  public provision: string[] | null = null;
  public interoperability: string[] | null = null;
  public access_coordination: string[] | null = null;
  public frequency: string[] | null = null;
  public purpose_of_usage: string[] | null = null;
  public type_of_relationship: string[] | null = null;
  public benefits: string[] | null = null;
  public initiating_party: string[] | null = null;
  public control_authority: string[] | null = null;

  @Output() filterCase: EventEmitter<Usecase> = new EventEmitter<Usecase>();

  organizationChange(event){
    if (event.target.value === '') {
      this.organizations = null;
    } else {
      this.organizations = event.target.value.split(',');
    }
    console.log(this.organizations);
  }

  industriesChange(event) {
    if (event.target.value === '') {
      this.industries = null;
    } else {
      this.industries = event.target.value.split(',');
    }
    console.log(this.industries);
  }

  titleChange(event) {
    if (event.target.value === '') {
      this.title = null;
    } else {
      this.title = event.target.value;
    }
    console.log(this.title);
  }

  yopChange(event) {
    if (event.target.value === '') {
      this.year_of_publication = null;
    } else {
      this.year_of_publication = event.target.value;
    }
    console.log(this.year_of_publication);
  }

  onFilterCases() {
    this.filterCase.emit();
  }
}
