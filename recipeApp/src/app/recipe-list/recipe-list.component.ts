import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Observable<Recipe[]> | undefined;

  constructor(private recipeService: RecipeService, private router: Router){}

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.recipes = this.recipeService.getAllRecipes();
  }

  recipeDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
