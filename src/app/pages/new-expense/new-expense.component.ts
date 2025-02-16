import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-new-expense',
  imports: [ReactiveFormsModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {
  registerForm : FormGroup;
  expensesService = inject(ExpensesService)
   constructor() {
      this.registerForm = new FormGroup({
       name: new FormControl(),
      amount: new FormControl(),
       assignation: new FormControl()
       })
}
onSubmit(){

}
}
