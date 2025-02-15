import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-search',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './expense-search.component.html',
  styleUrl: './expense-search.component.css'
})
export class ExpenseSearchComponent {
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


