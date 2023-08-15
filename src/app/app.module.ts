import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { WeekScheduleComponent } from './week-schedule/week-schedule.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CdkDrag, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SearchComponent,
    AboutComponent,
    WeekScheduleComponent,
    BookmarkComponent,
    RecipeCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    CdkDropListGroup, CdkDropList, CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
