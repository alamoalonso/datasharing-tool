import { Component, OnInit } from '@angular/core';
import { Usecase } from 'src/app/sites/shared/usecase.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-use-case-item',
  templateUrl: './use-case-item.component.html',
  styleUrls: ['./use-case-item.component.css']
})
export class UseCaseItemComponent implements OnInit {

  @Input() useCase: Usecase;
  @Input() filterCase: Usecase;

  useCaseProperties: [string, any][];
  clearedProperties: [string, any][];

  blockedProps = ['title', 'organizations', 'contact_person', 'industries', 'year_of_publication'];

  ngOnInit() {
    this.useCaseProperties = Object.entries(this.useCase);
    this.clearedProperties = this.useCaseProperties.filter(item => (item[1] !== null && !this.blockedProps.includes(item[0])));
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

    return sim + '%'
  }

}
