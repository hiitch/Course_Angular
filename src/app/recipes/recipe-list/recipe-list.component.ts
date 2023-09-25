import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe 1", "This is our first recipe", "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Mojo-Marinade-Recipe.jpg"),
    new Recipe("Recipe 1", "This is our first recipe", "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Mojo-Marinade-Recipe.jpg"),
    new Recipe("Recipe 1", "This is our first recipe", "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Mojo-Marinade-Recipe.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
