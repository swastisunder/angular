import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = [
    { id: 1, name: 'Om', age: 30 },
    { id: 2, name: 'Badal', age: 25 },
    { id: 3, name: 'Krish', age: 20 },
  ];
}
