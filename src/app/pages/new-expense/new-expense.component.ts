import { Component, inject } from '@angular/core';
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
          text: 'Por favor, completa todos los campos correctamente.',
          icon: 'error',
          confirmButtonText: 'Revisar'
      });
      return;
  }

  
  const UserIDCreator = localStorage.getItem('UserIDCreator'); 
  const TeamID = localStorage.getItem('TeamID'); 

  if (!UserIDCreator || !TeamID) {
      Swal.fire({
          title: 'Error',
          text: 'No se encontró información del usuario o del equipo. Por favor, inicia sesión de nuevo.',
          icon: 'error',
          confirmButtonText: 'Cerrar'
      });
      return;
  }


  const userID = Number(UserIDCreator);
  const teamID = Number(TeamID);


  const expenseBody = {
      name: this.registerForm.value.name,
      amount: this.registerForm.value.amount,
      UserIDCreator: userID, 
      TeamID: teamID
  };

  try {
      const newExpense = await this.expensesService.add(expenseBody);

      Swal.fire({
          title: '¡Gasto agregado!',
          text: `El gasto ha sido registrado correctamente.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
      });

      this.registerForm.reset();
   } catch (error: any) {
    console.error(error);

    Swal.fire({
        title: 'Error',
        text: error?.error?.message || 'No se pudo agregar el gasto. Intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
}
}




checkErrorField(field: string, error: string): boolean {
  const control = this.registerForm.get(field);
  return control ? control.hasError(error) && control.touched : false;
}

}

