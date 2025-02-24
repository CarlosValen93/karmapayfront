import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-category',
  imports: [],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {
  categories: string[] = [];
  
  teamsService = inject(TeamsService);
  router = inject(Router);
  @Output() selectCategory: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
    this.categories = this.teamsService.getAllCategories();


  }

  getByCategory(event: any) {
    this.selectCategory.emit(event.target.value);
  }

}
