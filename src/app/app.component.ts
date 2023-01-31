import { AfterContentChecked, AfterContentInit, Component, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { HomeComponent } from './sites/home/home.component';
import { MyProfileComponent } from './sites/my-profile/my-profile.component';
import { Usecase } from './sites/shared/usecase.model';
import { UseCaseLibraryComponent } from './sites/use-case-library/use-case-library.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild("home") homeRef: HomeComponent;
  @ViewChild("lib") libRef: UseCaseLibraryComponent;
  @ViewChild("profile") profileRef: MyProfileComponent;

  selectedSite = 'Home';

  changeSite(newSite: string) {
    this.selectedSite = newSite;
  }

  passCase(usecase: Usecase) {
    this.libRef.useCases.push(usecase);
    this.libRef.updateSortedCases();
    this.profileRef.myUsecases.push(usecase);
    this.homeRef.newCase(this.libRef.useCases);
  }

  gotFav(usecase: Usecase){
    this.profileRef.favUsecases.push(usecase);
  }

  gotUnfav(usecase: Usecase){
    this.profileRef.deleteFavCase(usecase);
  }

  delCase(usecase: Usecase){
    const index = this.libRef.useCases.indexOf(usecase, 0);
    if(index > 0) {
      this.libRef.useCases.splice(index, 1);
    }
    this.libRef.updateSortedCases();
  }

}

