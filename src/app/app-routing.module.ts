import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  // more routes goes here
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
