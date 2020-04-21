import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: '<./app.component.html>',
  template: "<router-outlet></router-outlet>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportsStore';
}
