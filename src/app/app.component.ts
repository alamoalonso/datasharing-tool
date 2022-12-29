import { Component } from '@angular/core';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSite = 'Home';

  changeSite(newSite: string) {
    this.selectedSite = newSite;
  }
}

