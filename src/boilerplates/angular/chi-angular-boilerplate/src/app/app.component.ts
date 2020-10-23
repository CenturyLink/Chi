import { Component, AfterViewInit } from '@angular/core';

declare const chi: any;

@Component({
  selector: 'app-root',
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
