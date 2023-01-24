import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Usecase } from '../shared/usecase.model';
import { UseCaseItemComponent } from '../use-case-library/use-case-list/use-case-item/use-case-item.component';

@Component({
  selector: 'app-upload-new-case',
  templateUrl: './upload-new-case.component.html',
  styleUrls: ['./upload-new-case.component.css']
})
export class UploadNewCaseComponent implements AfterViewInit{

  public caseUploaded: boolean = false;

  useCase: Usecase;
  prevCase: Usecase = new Usecase('Title', 'Description', ['Organizations'], {name: 'Contact person', email: ''}, ['Industry'], 'Year', 'somelink', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  filCase: Usecase = new Usecase("EASTEREGG", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  @ViewChild("preCase") preRef: UseCaseItemComponent;

  @Output() uploadedCase: EventEmitter<Usecase> = new EventEmitter();
  @Output() libActive: EventEmitter<string> = new EventEmitter();

  ngAfterViewInit() {
    this.preRef.useCase = this.prevCase;
    this.preRef.filterCase = this.filCase;
  }

  public title = null;
  public organizations = null;
  public industries = null;
  public contact_person = {name: null, email: null};
  public description = null;
  public link = null;
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

  public prevTitle;
  public prevDescription;
  public prevOrganizations;
  public prevContactPerson = {name: "Contact person", email: ""};
  public prevIndustries;
  public prevYop;


  upCase() {
    this.useCase = new Usecase(this.title, this.description, this.organizations, this.contact_person, this.industries, this.year_of_publication, this.link, this.type, this.maturity_of_processing, this.source, this.privacy, this.pii_relevance, this.sovereignitiy, this.timeframe, this.motivation, this.scope, this.reward, this.payment_model, this.role, this.provision, this.interoperability, this.access_coordination, this.frequency, this.purpose_of_usage, this.type_of_relationship, this.benefits, this.initiating_party, this.control_authority);
    this.updatePreview();
  }

  updatePreview() {
    if(this.title === null) {
      this.prevTitle = 'Title'
    } else {
      this.prevTitle = this.title;
    }

    if(this.description === null){
      this.prevDescription = "Description";
    } else {
      this.prevDescription = this.description;
    }

    if(this.organizations === null){
      this.prevOrganizations = ["Organizations"];
    } else {
      this.prevOrganizations = this.organizations;
    }

    if(this.contact_person.name === null){
      this.prevContactPerson.name === "Contact person"
    } else {
      this.prevContactPerson.name = this.contact_person.name;
    }

    if(this.contact_person.email === null) {
      this.prevContactPerson.email === "";
    } else {
      this.prevContactPerson.email = this.contact_person.email;
    }

    if(this.industries === null) {
      this.prevIndustries = ["Industries"];
    } else{
      this.prevIndustries = this.industries
    }

    if(this.year_of_publication === null) {
      this.prevYop = "Year";
    } else {
      this.prevYop = this.year_of_publication;
    }


    this.preRef.useCase = new Usecase(this.prevTitle, this.prevDescription, this.prevOrganizations, this.prevContactPerson, this.prevIndustries, this.prevYop, this.link, this.type, this.maturity_of_processing, this.source, this.privacy, this.pii_relevance, this.sovereignitiy, this.timeframe, this.motivation, this.scope, this.reward, this.payment_model, this.role, this.provision, this.interoperability, this.access_coordination, this.frequency, this.purpose_of_usage, this.type_of_relationship, this.benefits, this.initiating_party, this.control_authority);
    this.preRef.updateCase();
  }

  uploadCase() {
    this.uploadedCase.emit(this.useCase);
    this.caseUploaded = true;
  }

  goToLib() {
    this.libActive.emit("Use Case Library");
  }

  titleChange(event) {
    if (event.target.value === '') {
      this.title = null;
    } else {
      this.title = event.target.value;
    }
    this.upCase();
  }

  organizationChange(event){
    if (event.target.value === '') {
      this.organizations = null;
    } else {
      this.organizations = event.target.value.split(',');
    }
    this.upCase();
  }

  industriesChange(event) {
    if (event.target.value === '') {
      this.industries = null;
    } else {
      this.industries = event.target.value.split(',');
    }
    this.upCase();
  }

  nameChange(event) {
    if(event.target.value === '') {
      this.contact_person.name = null;
    } else {
      this.contact_person.name = event.target.value;
    }
    this.upCase();
  }

  mailChange(event) {
    if(event.target.value === '') {
      this.contact_person.email = null;
    } else {
      this.contact_person.email = event.target.value;
    }
    this.upCase();
  }

  descChange(event) {
    if(event.target.value === '') {
      this.description = null;
    } else {
      this.description = event.target.value;
    }
    this.upCase();
  }

  linkChange(event){
    if(event.target.value === '') {
      this.link = null;
    } else {
      this.link = event.target.value;
    }
    this.upCase();
  }

  yopChange(event) {
    if (event.target.value === '') {
      this.year_of_publication = null;
    } else {
      this.year_of_publication = event.target.value;
    }
    this.upCase();
  }

  typeChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.type = stringevent.split(',');
    } else{
      this.type = null;
    }
    this.upCase();
  }

  mopChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.maturity_of_processing = stringevent.split(',');
    } else{
      this.maturity_of_processing = null;
    }
    this.upCase();
  }

  sourceChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.source = stringevent.split(',');
    } else{
      this.source = null;
    }
    this.upCase();
  }

  privacyChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.privacy = stringevent.split(',');
    } else{
      this.privacy = null;
    }
    this.upCase();
  }

  pii_relevanceChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.pii_relevance = stringevent.split(',');
    } else{
      this.pii_relevance = null;
    }
    this.upCase();
  }

  sovereignityChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.sovereignitiy = stringevent.split(',');
    } else{
      this.sovereignitiy = null;
    }
    this.upCase();
  }

  timeframeChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.timeframe = stringevent.split(',');
    } else{
      this.timeframe = null;
    }
    this.upCase();
  }

  motivationChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.motivation = stringevent.split(',');
    } else{
      this.motivation = null;
    }
    this.upCase();
  }

  scopeChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.scope = stringevent.split(',');
    } else{
      this.scope = null;
    }
    this.upCase();
  }

  rewardChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.reward = stringevent.split(',');
    } else{
      this.reward = null;
    }
    this.upCase();
  }

  payment_modelChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.payment_model = stringevent.split(',');
    } else{
      this.payment_model = null;
    }
    this.upCase();
  }

  roleChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.role = stringevent.split(',');
    } else{
      this.role = null;
    }
    this.upCase();
  }

  provisionChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.provision = stringevent.split(',');
    } else{
      this.provision = null;
    }
    this.upCase();
  }

  interoperabilityChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.interoperability = stringevent.split(',');
    } else{
      this.interoperability = null;
    }
    this.upCase();
  }

  accessChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.access_coordination = stringevent.split(',');
    } else{
      this.access_coordination = null;
    }
    this.upCase();
  }

  frequencyChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.frequency = stringevent.split(',');
    } else{
      this.frequency = null;
    }
    this.upCase();
  }

  pouChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.purpose_of_usage = stringevent.split(',');
    } else{
      this.purpose_of_usage = null;
    }
    this.upCase();
  }

  torChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.type_of_relationship = stringevent.split(',');
    } else{
      this.type_of_relationship = null;
    }
    this.upCase();
  }

  benefitsChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.benefits = stringevent.split(',');
    } else{
      this.benefits = null;
    }
    this.upCase();
  }

  ipChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.initiating_party = stringevent.split(',');
    } else{
      this.initiating_party = null;
    }
    this.upCase();
  }

  caChange(event) {
    let stringevent = String(event);
    if (stringevent !== ''){
      this.control_authority = stringevent.split(',');
    } else{
      this.control_authority = null;
    }
    this.upCase();
  }
}
