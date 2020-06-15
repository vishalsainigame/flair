import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeFrom: FormGroup;

  constructor(private route: ActivatedRoute, private reccipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.reccipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.recipeFrom = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.reccipeService.updateRecipe(this.id, this.recipeFrom.value);
    } else {
      this.reccipeService.addRecipe(this.recipeFrom.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
