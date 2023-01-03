import { Component } from '@angular/core';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSite = 'Use Case Library';

  changeSite(newSite: string) {
    this.selectedSite = newSite;
  }
}

