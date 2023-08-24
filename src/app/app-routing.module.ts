import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FormsTestComponent } from './forms-test/forms-test.component';



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {animation: 'fade'}},
  {path: 'search', component: SearchComponent, data: {animation: 'fade'}},
  {path: 'about', component: AboutComponent, data: {animation: 'fade'}},
  {path: 'recipe-detail/:id', component: RecipeDetailComponent, data: {animation: 'fade'} }, // New route
  {path: 'create-recipe', component: CreateRecipeComponent, data: {animation: 'fade'}},
  {path: 'forms-test', component: FormsTestComponent, data: {animation: 'fade'}},
  {path: 'recipe', redirectTo: '/search', pathMatch: 'full', data: {animation: 'fade'}},
  // more routes goes here
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {animation: 'fade'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
