import { Component, inject, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-new-expense',
  imports: [ReactiveFormsModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {
  @Input() idTeam: number = 0;
  router = inject(Router);
  location = inject(Location);
  registerForm: FormGroup;
  expensesService = inject(ExpensesService)
  userService = inject(UsersService)
  arrUsersTeam: IUser[] = []
  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      amount: new FormControl('', [Validators.required, Validators.min(0.5), Validators.max(1000000), Validators.pattern("^[0-9]*$")]),
      assignations: new FormArray<FormGroup>([])
    });
    //assignation: new FormControl()

  }

  async ngOnInit() {
    this.arrUsersTeam = await this.userService.getByIdGroup(this.idTeam)
    for (let user of this.arrUsersTeam) {
      const assignationUser = new FormGroup({
        Username: new FormControl(user.Username),
        Assignation: new FormControl()
      });
      this.assignations.push(assignationUser)
    }
  }

  get assignations() {
    return this.registerForm.get("assignations") as FormArray
  }

  async onSubmit() {
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.',
        icon: 'error',
        confirmButtonText: 'Revisar'
      });
      return;
    }

    const expenseBody = {
      name: this.registerForm.value.name,
      amount: this.registerForm.value.amount,
      teamId: this.idTeam
    };
    console.log(expenseBody);

    try {
      await this.expensesService.add(expenseBody);

      Swal.fire({
        title: '¡Gasto agregado!',
        text: `El gasto ha sido registrado correctamente.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      this.registerForm.reset();
      this.router.navigate(['/team/' + this.idTeam]);

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

  goBack() {
    this.location.back();
  }

}

