import { Component, inject } from '@angular/core';
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


  ngOnInit() {
    this.categories = this.teamsService.getAllCategories();
    console.log(this.categories);

  }

  getByCategory(event: any) {
    console.log(event.target.value);
  }

}
