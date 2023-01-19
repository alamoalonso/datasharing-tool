import { AfterContentChecked, Component, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  selectedSite = 'Upload new Case';

  changeSite(newSite: string) {
    this.selectedSite = newSite;
  }

}

