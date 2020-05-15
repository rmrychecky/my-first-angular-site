import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header (html commets) can use in multiple places! (reusability) -->
    <app-header></app-header>
    
    <!-- routes get injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
