import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  @Output() busquedaEmitida: EventEmitter<string> = new EventEmitter();
  titleForm: FormGroup;

  constructor() {
    this.titleForm = new FormGroup({
      title: new FormControl("", [])
    }, [])
  }

  getTitle() {
    this.busquedaEmitida.emit(this.titleForm.value.title);
    this.titleForm.reset();
  }

  getInputTitle(event:any) {
    this.busquedaEmitida.emit(event.target.value);
  }
}
