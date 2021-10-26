import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  submitted = false;
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.recipeService.addRecipe(this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
      this.recipe = new Recipe();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  list(){
    this.router.navigate(['recipes']);
  }

}