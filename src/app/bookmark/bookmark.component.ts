import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent {
  isHidden = false; // Add this property
  isExpanded = false;
  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
