import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  recipeItem:Recipe;
  constructor() {}

  getRecipeItemVal(item) {
    console.log("Recipt Itegm");
    console.log(item);
    this.recipeItem=item;
  }

  ngOnInit(): void {}
}
