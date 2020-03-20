import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";


@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemDetail= new EventEmitter<{}>();
  recipes: Recipe[] = [
    new Recipe(
      "chow mein 1",
      "Chinese Chow min 1",
      "https://c.ndtvimg.com/mnng9ei8_chowmein_640x480_25_July_18.jpg"
    ),
    new Recipe(
      "chow mein 2",
      "Chinese Chow min 2",
      "https://c.ndtvimg.com/mnng9ei8_chowmein_640x480_25_July_18.jpg"
    )
  ];

  //On click recipe item emit to item to the detail component
  getRecipeItem(recipe) {
    this.recipeItemDetail.emit(recipe)
  }

  ngOnInit() {}
}
