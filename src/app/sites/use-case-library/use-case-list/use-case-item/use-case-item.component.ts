import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usecase } from 'src/app/sites/shared/usecase.model';
import { Input } from '@angular/core';
import { MyProfileComponent } from 'src/app/sites/my-profile/my-profile.component';

@Component({
  selector: 'app-use-case-item',
  templateUrl: './use-case-item.component.html',
  styleUrls: ['./use-case-item.component.css']
})
export class UseCaseItemComponent implements OnInit {

  @Input() useCase: Usecase;
  @Input() filterCase: Usecase;
  @Input() favOption: boolean = false;
  @Input() unfavOption: boolean = false;
  @Input() favBlocked: boolean = false;
  @Input() casesimilarityBlocked: boolean = false;
  @Input() deleteOption: boolean = false;

  @Output() newFav: EventEmitter<Usecase> = new EventEmitter();
  @Output() newUnfav: EventEmitter<Usecase> = new EventEmitter();
  @Output() newDelete: EventEmitter<Usecase> = new EventEmitter();

  ID_normal: string;
  ID_hash: string;
  useCaseProperties: [string, any][];
  clearedProperties: [string, any][];

  blockedProps = ['title', 'description', 'organizations', 'contact_person', 'industries', 'year_of_publication', 'link'];

  updateCase(){
    this.ngOnInit();
  }

  ngOnInit() {
    this.useCaseProperties = Object.entries(this.useCase);
    this.clearedProperties = this.useCaseProperties.filter(item => (item[1] !== null && !this.blockedProps.includes(item[0])));
    this.ID_normal = this.useCase.title.replace(/ /g, '').replace(/\W/g, '');
    this.ID_hash = '#' + this.ID_normal;
  }

  arToStr(prop: string[]) {

    let str: String = '';

    for (let i = 0; i < prop.length - 1; i++) {
      str = str + prop[i] + ', ';
    }

    str = str + prop[prop.length - 1];

    return str
  }

  charProper(char: string) {
    const re = /_/gi
    char = char.replace(re, ' ');
    char = char.charAt(0).toUpperCase() + char.substring(1);
    return char
  }

  computeFit() {
    let sim = Usecase.caseSimilarity(this.useCase, this.filterCase);
    sim = Math.round(sim * 100);
    if(!isNaN(sim)){
      return sim + '%'
    } else{
      return ""
    }
  }

  addFav(){
    this.favOption = false;
    this.unfavOption = true;
    this.newFav.emit(this.useCase);
  }

  unfav(){
    this.unfavOption = false;
    if(!this.favBlocked){
      this.favOption = true;
    }
    this.newUnfav.emit(this.useCase);
  }

  deleteCase(){
    this.newDelete.emit(this.useCase);
  }

}
