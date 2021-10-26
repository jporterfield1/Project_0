import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  id!: number;
  recipe!: Recipe;
  recipes: Observable<Recipe[]> | undefined;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();

    this.id = this.route.snapshot.params['id'];

    this.recipeService.getRecipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.recipe = data;
      }, error => console.log(error));
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.id, this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
  }

  onSubmit() {
    this.submitted = true;
    this.updateRecipe();

  }

  list() {
    this.reloadData();
    this.router.navigate(['recipes']);
  }

  reloadData() {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
