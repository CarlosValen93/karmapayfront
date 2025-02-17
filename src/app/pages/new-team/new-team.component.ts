import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-new-team',
  imports: [ReactiveFormsModule],
  templateUrl: './new-team.component.html',
  styleUrl: './new-team.component.css'
})
export class NewTeamComponent {
  registerForm: FormGroup;
  teamsService = inject(TeamsService)
   constructor() {
      this.registerForm = new FormGroup({
       name: new FormControl(),
      description: new FormControl(),
       image: new FormControl()
       })
}
async onSubmit(){

}
}
