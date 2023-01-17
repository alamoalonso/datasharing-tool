import { AfterContentChecked, Component, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{

  constructor(private zone: NgZone) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.zone.run(() => console.log('Ran zone'));
  }

  selectedSite = 'Home';

  changeSite(newSite: string) {
    this.selectedSite = newSite;
  }

}

