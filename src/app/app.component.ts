import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  //templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  //styleUrl: './app.component.css'
  styles:[
    `
    main {
      padding-inline: 16px;
    }
    `
  ]
})
export class AppComponent {
  title = 'my-first-angular-app';
}
