import { Component, OnInit } from "@angular/core";
import { Recipe } from '../recipe.model';


@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe("chow mein", "Chinese Chow min", "https://c.ndtvimg.com/mnng9ei8_chowmein_640x480_25_July_18.jpg")
      ];
    

  ngOnInit() {}
}
