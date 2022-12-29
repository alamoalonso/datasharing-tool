import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() changedSite = new EventEmitter<string>()

  onHomeClick() {
    this.changedSite.emit('Home');
  }

  onLibraryClick() {
    this.changedSite.emit('Use Case Library');
  }

  onUploadNewCaseClick() {
    this.changedSite.emit('Upload new Case');
  }

  onMyProfileClick() {
    this.changedSite.emit('My Profile');
  }

  onHelpClick() {
    this.changedSite.emit('Help');
  }

  onFooterClick() {

  }
}
