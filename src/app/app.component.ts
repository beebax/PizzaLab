import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  ourMenu:MenuItem[] = [
    {
      name: "Wings",
      category: "appetizers",
      price: 8.05,
      vegetarian: false
    },
    {
      name: "Mozzarella sticks",
      category: "appetizers",
      price: 7.55,
      vegetarian: true
    },
    {
      name: "Supreme pizza",
      category: "pizza",
      price: 22.55,
      vegetarian: false
    },
    {
      name: "Margherita pizza",
      category: "pizza",
      price: 19.65,
      vegetarian: true
    },
    {
      name: "Eggplant parmesan",
      category: "entrees",
      price: 14.05,
      vegetarian: true
    },
    {
      name: "Spaghetti bolognese",
      category: "entrees",
      price: 17.25,
      vegetarian: false
    },
    {
      name: "Caesar salad",
      category: "sides",
      price: 11.25,
      vegetarian: false
    },
    {
      name: "Antipasto salad",
      category: "sides",
      price: 9.65,
      vegetarian: true
    },
    {
      name: "Chocolate lava cake",
      category: "desserts",
      price: 6.25,
      vegetarian: true
    },
    {
      name: "Cinnamon sticks",
      category: "desserts",
      price: 5.55,
      vegetarian: true
    }
  ]
}
