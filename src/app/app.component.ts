import { AfterContentChecked, Component, NgZone, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Usecase } from './sites/shared/usecase.model';
import { UseCaseLibraryComponent } from './sites/use-case-library/use-case-library.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild("lib") libRef: UseCaseLibraryComponent;

  selectedSite = 'Home';

  changeSite(newSite: string) {
    this.selectedSite = newSite;
  }

  passCase(usecase: Usecase) {
    this.libRef.useCases.push(usecase);
    this.libRef.updateSortedCases();
  }

}

