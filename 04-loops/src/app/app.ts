import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = [
    { id: 1, name: 'Alice', age: 30, city: 'New York', hobbies: ['Reading', 'Traveling'] },
    { id: 2, name: 'Bob', age: 25, city: 'Los Angeles', hobbies: ['Cooking', 'Gaming'] },
    { id: 3, name: 'Charlie', age: 35, city: 'Chicago', hobbies: ['Hiking', 'Photography'] },
    { id: 4, name: 'David', age: 28, city: 'Miami', hobbies: ['Swimming', 'Dancing'] },
    { id: 5, name: 'Eve', age: 32, city: 'Seattle', hobbies: ['Writing', 'Yoga'] },
  ];
}
