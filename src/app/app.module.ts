import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-cdbangular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NavbarModule } from 'ng-cdbangular';
import { ButtonModule } from 'ng-cdbangular';
import { DropdownModule } from 'ng-cdbangular';
import { CollapseModule } from 'ng-cdbangular';
import { HomeComponent } from './sites/home/home.component';
import { UseCaseLibraryComponent } from './sites/use-case-library/use-case-library.component';
import { UploadNewCaseComponent } from './sites/upload-new-case/upload-new-case.component';
import { MyProfileComponent } from './sites/my-profile/my-profile.component';
import { HelpComponent } from './sites/help/help.component';
import { SearchFilterComponent } from './sites/use-case-library/search-filter/search-filter.component';
import { UseCaseListComponent } from './sites/use-case-library/use-case-list/use-case-list.component';
import { UseCaseItemComponent } from './sites/use-case-library/use-case-list/use-case-item/use-case-item.component';
import { DropdownCheckboxComponent } from './sites/use-case-library/search-filter/dropdown-checkbox/dropdown-checkbox.component';
import { DropdownRadioComponent } from './sites/use-case-library/search-filter/dropdown-radio/dropdown-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    UseCaseLibraryComponent,
    UploadNewCaseComponent,
    MyProfileComponent,
    HelpComponent,
    SearchFilterComponent,
    UseCaseListComponent,
    UseCaseItemComponent,
    DropdownCheckboxComponent,
    DropdownRadioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    ButtonModule,
    DropdownModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
