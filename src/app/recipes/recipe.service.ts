import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Product 1', 'This product will deliver',
            'https://www.shiprocket.in/wp-content/uploads/2019/01/2019-01-28-1024x512.jpg'),
        new Recipe('Product 2', 'This product will deliver',
            'https://www.shiprocket.in/wp-content/uploads/2019/01/2019-01-28-1024x512.jpg')
    ];

    constructor() {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
