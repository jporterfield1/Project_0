import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id!: number;
  recipe!: Recipe;
  recipes: Observable<Recipe[]> | undefined;
  submitted = false;

  constructor(private route: ActivatedRoute, private router:Router, private recipeService: RecipeService) { }

  // ngOnInit(): void{
 
  // }
  ngOnInit() {
    this.recipe = new Recipe();
    this.reloadData();
    this.id = this.route.snapshot.params['id'];
    
    
    this.recipeService.getRecipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.recipe = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['recipes']);
  }

  updateRecipe(id: number){
    this.router.navigate(['update', id]);
  }

  deleteRecipe(id: number){
    this.submitted = true;
    this.recipeService.deleteRecipe(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  reloadData(){
    this.recipes = this.recipeService.getAllRecipes();
  }
}
    // this.recipe = new Recipe();
    // this.reloadData();
    // this.id = this.route.snapshot.params['id'];
    // this.recipeService.getRecipe(this.id).subscribe(data =>{
    //   console.log(data)
    //   this.recipe = data;
    // }, error => console.log(error));
  // list(){
  //   this.router.navigate(['recipes']);
  // }
  // reloadData(){
  //   this.recipes = this.recipeService.getAllRecipes();
  // }
  // updateRecipe(id: number){
  //   this.router.navigate(['update', id])
  // }

  // deleteRecipe(id: number){
  //   this.recipeService.deleteRecipe(id).subscribe(
  //     data => {
  //       console.log(data);
  //       this.reloadData();
  //     },
  //     error => console.log(error)
  //   );
  // }

