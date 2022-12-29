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
