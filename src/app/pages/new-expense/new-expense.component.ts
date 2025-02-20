import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-expense',
  imports: [ReactiveFormsModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {
  @Input() idTeam: number=0;


  registerForm : FormGroup;
  expensesService = inject(ExpensesService)
   constructor() {
      this.registerForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        amount: new FormControl('', [Validators.required, Validators.min(0.5), Validators.max(1000000), Validators.pattern("^[0-9]*$")])
      });
       //assignation: new FormControl()
      
}

async onSubmit() {
  if (this.registerForm.invalid) {
    Swal.fire({
      title: 'Error',
      text: 'Los datos ingresados no son válidos. Verifica los campos.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  const expenseBody = {
    name: this.registerForm.value.name,
    amount: this.registerForm.value.amount,
    teamId: this.idTeam
  };
console.log(expenseBody);
  const newExpense = await this.expensesService.add(expenseBody);
    console.log(newExpense);

  try {
    

    Swal.fire({
      title: '¡Gasto añadido!',
      text: 'Se ha añadido tu gasto al grupo',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    this.registerForm.reset();
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'No se pudo agregar el gasto. Intenta de nuevo.',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    });
    console.error(error);
  }
}

checkErrorField(field: string, error: string): boolean {
  const control = this.registerForm.get(field);
  return control ? control.hasError(error) && control.touched : false;
}

}

