import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';

declare const chi: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-boilerplate';
  constructor() { }
  ngAfterViewInit() {
    chi.modal(document.getElementById('modal-trigger-1'));
  }
}
