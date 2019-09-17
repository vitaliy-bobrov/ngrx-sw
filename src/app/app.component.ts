import { Component } from '@angular/core';

@Component({
  selector: 'ngsw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgRx Star Wars';
  links = [
    { path: "/heroes", icon: "movie", label: "Heroes" },
    { path: "/padavans", icon: "book", label: "Padavans" }
  ];
}
