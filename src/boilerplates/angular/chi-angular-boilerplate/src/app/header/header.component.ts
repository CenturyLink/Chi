import { AfterViewInit, Component } from '@angular/core';

declare const chi: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit() {
    chi.drawer(document.getElementById('drawer-portal-with-navbar'));
    chi.dropdown(
      document.getElementById('button-site-portal-with-navbar')
    );
    chi.dropdown(
      document.getElementById('button-user-portal-with-navbar')
    );
    chi.dropdown(
      document.getElementById('button-eid-portal-with-navbar')
    );
  }

}
