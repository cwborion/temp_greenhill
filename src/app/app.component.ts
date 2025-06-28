import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})

export class AppComponent {
  title = 'greenhill-app';
  isAuthenticated: boolean = true; // set to false eventually!
}