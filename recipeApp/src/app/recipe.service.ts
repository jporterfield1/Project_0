import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:3000/recipes'
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getRecipe(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  addRecipe(recipe: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, recipe);
  }
  updateRecipe(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRecipe(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'})
  }
}
