import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Usecase } from '../../shared/usecase.model';
import { DropdownCheckboxComponent } from './dropdown-checkbox/dropdown-checkbox.component';
import { DropdownRadioComponent } from './dropdown-radio/dropdown-radio.component';

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
  public type = null;
  public maturity_of_processing = null;
  public source = null;
  public privacy = null;
  public pii_relevance = null;
  public sovereignitiy = null;
  public timeframe = null;
  public motivation = null;
  public scope = null;
  public reward = null;
  public payment_model = null;
  public role = null;
  public provision = null;
  public interoperability = null;
  public access_coordination = null;
  public frequency = null;
  public purpose_of_usage = null;
  public type_of_relationship = null;
  public benefits = null;
  public initiating_party = null;
  public control_authority = null;

  @Output() filterCase: EventEmitter<Usecase> = new EventEmitter<Usecase>();
  @Output() sortBy: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('title') titleRef: ElementRef;
  @ViewChild('organization') orgRef: ElementRef;
  @ViewChild('industry') indRef: ElementRef;
  @ViewChild('yop') yopRef: ElementRef;
  @ViewChild('type') typeRef: DropdownCheckboxComponent;
  @ViewChild('mop') mopRef: DropdownCheckboxComponent;
  @ViewChild('source') sourceRef: DropdownCheckboxComponent;
  @ViewChild('privacy') privacyRef: DropdownRadioComponent;
  @ViewChild('pii') piiRef: DropdownRadioComponent;
  @ViewChild('sov') sovRef: DropdownRadioComponent;
  @ViewChild('time') timeRef: DropdownCheckboxComponent;
  @ViewChild('moti') motiRef: DropdownCheckboxComponent;
  @ViewChild('scope') scopeRef: DropdownCheckboxComponent;
  @ViewChild('reward') rewardRef: DropdownCheckboxComponent;
  @ViewChild('pay') payRef: DropdownCheckboxComponent;
  @ViewChild('prov') provRef: DropdownCheckboxComponent;
  @ViewChild('role') roleRef: DropdownCheckboxComponent;
  @ViewChild('inter') interRef: DropdownCheckboxComponent;
  @ViewChild('acc') accRef: DropdownCheckboxComponent;
  @ViewChild('freq') freqRef: DropdownCheckboxComponent;
  @ViewChild('pou') pouRef: DropdownCheckboxComponent;
  @ViewChild('tor') torRef: DropdownRadioComponent;
  @ViewChild('bene') beneRef: DropdownCheckboxComponent;
  @ViewChild('init') initRef: DropdownRadioComponent;
  @ViewChild('control') controlRef: DropdownCheckboxComponent;

  onClearFilter() {
    this.titleRef.nativeElement.value = '';
    this.title = null;

    this.orgRef.nativeElement.value = '';
    this.organizations = null;

    this.indRef.nativeElement.value = '';
    this.industries = null;

    this.yopRef.nativeElement.value = '';
    this.year_of_publication = null;

    this.typeRef.reset();
    this.mopRef.reset();
    this.sourceRef.reset();
    this.privacyRef.reset();
    this.piiRef.reset();
    this.sovRef.reset();
    this.timeRef.reset();
    this.motiRef.reset();
    this.scopeRef.reset();
    this.rewardRef.reset();
    this.payRef.reset();
    this.provRef.reset();
    this.roleRef.reset();
    this.interRef.reset();
    this.accRef.reset();
    this.freqRef.reset();
    this.pouRef.reset();
    this.torRef.reset();
    this.beneRef.reset();
    this.initRef.reset();
    this.controlRef.reset();

    this.filterCase.emit(
      new Usecase(
        this.title,
        null,
        this.organizations,
        null,
        this.industries,
        this.year_of_publication,
        null,
        this.type,
        this.maturity_of_processing,
        this.source,
        this.privacy,
        this.pii_relevance,
        this.sovereignitiy,
        this.timeframe,
        this.motivation,
        this.scope,
        this.reward,
        this.payment_model,
        this.role,
        this.provision,
        this.interoperability,
        this.access_coordination,
        this.frequency,
        this.purpose_of_usage,
        this.type_of_relationship,
        this.benefits,
        this.initiating_party,
        this.control_authority
      )
    );
  }

  onSort(str){
    this.sortBy.emit(str);
  }

  onFilterCases() {
    this.filterCase.emit(
      new Usecase(
        this.title,
        null,
        this.organizations,
        null,
        this.industries,
        this.year_of_publication,
        null,
        this.type,
        this.maturity_of_processing,
        this.source,
        this.privacy,
        this.pii_relevance,
        this.sovereignitiy,
        this.timeframe,
        this.motivation,
        this.scope,
        this.reward,
        this.payment_model,
        this.role,
        this.provision,
        this.interoperability,
        this.access_coordination,
        this.frequency,
        this.purpose_of_usage,
        this.type_of_relationship,
        this.benefits,
        this.initiating_party,
        this.control_authority
      )
    );
  }

  organizationChange(event){
    if (event.target.value === '') {
      this.organizations = null;
    } else {
      this.organizations = event.target.value.split(',');
    }
  }

  industriesChange(event) {
    if (event.target.value === '') {
      this.industries = null;
    } else {
      this.industries = event.target.value.split(',');
    }
  }

  titleChange(event) {
    if (event.target.value === '') {
      this.title = null;
    } else {
      this.title = event.target.value;
    }
  }

  yopChange(event) {
    if (event.target.value === '') {
      this.year_of_publication = null;
    } else {
      this.year_of_publication = event.target.value;
    }
  }

  typeChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.type = stringevent.split(',');
    } else{
      this.type = null;
    }
  }

  mopChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.maturity_of_processing = stringevent.split(',');
    } else{
      this.maturity_of_processing = null;
    }
  }

  sourceChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.source = stringevent.split(',');
    } else{
      this.source = null;
    }
  }

  privacyChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.privacy = stringevent.split(',');
    } else{
      this.privacy = null;
    }
  }

  pii_relevanceChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.pii_relevance = stringevent.split(',');
    } else{
      this.pii_relevance = null;
    }
  }

  sovereignityChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.sovereignitiy = stringevent.split(',');
    } else{
      this.sovereignitiy = null;
    }
  }

  timeframeChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.timeframe = stringevent.split(',');
    } else{
      this.timeframe = null;
    }
  }

  motivationChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.motivation = stringevent.split(',');
    } else{
      this.motivation = null;
    }
  }

  scopeChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.scope = stringevent.split(',');
    } else{
      this.scope = null;
    }
  }

  rewardChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.reward = stringevent.split(',');
    } else{
      this.reward = null;
    }
  }

  payment_modelChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.payment_model = stringevent.split(',');
    } else{
      this.payment_model = null;
    }
  }

  roleChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.role = stringevent.split(',');
    } else{
      this.role = null;
    }
  }

  provisionChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.provision = stringevent.split(',');
    } else{
      this.provision = null;
    }
  }

  interoperabilityChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.interoperability = stringevent.split(',');
    } else{
      this.interoperability = null;
    }
  }

  accessChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.access_coordination = stringevent.split(',');
    } else{
      this.access_coordination = null;
    }
  }

  frequencyChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.frequency = stringevent.split(',');
    } else{
      this.frequency = null;
    }
  }

  pouChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.purpose_of_usage = stringevent.split(',');
    } else{
      this.purpose_of_usage = null;
    }
  }

  torChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.type_of_relationship = stringevent.split(',');
    } else{
      this.type_of_relationship = null;
    }
  }

  benefitsChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.benefits = stringevent.split(',');
    } else{
      this.benefits = null;
    }
  }

  ipChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.initiating_party = stringevent.split(',');
    } else{
      this.initiating_party = null;
    }
  }

  caChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.control_authority = stringevent.split(',');
    } else{
      this.control_authority = null;
    }
  }

}
