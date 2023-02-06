import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-tag',
  templateUrl: './help-tag.component.html',
  styleUrls: ['./help-tag.component.css']
})
export class HelpTagComponent implements OnInit{

  @Input() dimension: string;
  @Input() explanation: string;
  public ID_hash;
  public ID_normal;

  ngOnInit(){
    this.ID_normal = this.dimension.replace(/ /g, '').replace(/\W/g, '');
    this.ID_hash = '#' + this.ID_normal;
  }

}
