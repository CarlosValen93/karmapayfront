import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExpensesService } from '../../../services/expenses.service';

@Component({
  selector: 'app-update-expense',
  imports: [ReactiveFormsModule],
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.css'
})
export class UpdateExpenseComponent {
    @Input() idExpense: number=0;
  registerForm : FormGroup;
  expensesService = inject(ExpensesService)
   constructor() {
      this.registerForm = new FormGroup({
       name: new FormControl(),
      amount: new FormControl()
       //assignation: new FormControl()
       })
}
async onSubmit(){
  const expenseBody = {
    name: this.registerForm.value.name,
    amount: this.registerForm.value.amount
  };
  this.expensesService.update(this.idExpense,expenseBody);
}
}
