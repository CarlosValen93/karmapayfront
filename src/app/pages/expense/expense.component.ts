import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ExpenseResponse, ExpensesService } from '../../services/expenses.service';

import Swal from 'sweetalert2';
import { DatePipe, Location } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-expense',
  imports: [DatePipe, ButtonComponent],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  @Input() idExpense: number = 0;
  expensesService = inject(ExpensesService);
  router = inject(Router);
  expense!: ExpenseResponse;
  location = inject(Location);
  assig: number = 0
  async ngOnInit() {
    try {
      let id: number = Number(this.idExpense);
      let response = await this.expensesService.getById(id);
      console.log(response)
      if (response) {
        this.expense = response;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Id de gasto no existe",
        });
        this.router.navigate(['/home']);
      }

      const assigResult = await this.expensesService.getAssig(id)
      this.assig = assigResult.Assignation

      if (!assigResult) { this.assig = 0 }

    } catch (error) {
      console.log(error)
    }
  }

  async ngDeleteExpense() {
    try {

      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás recuperar el gasto una vez borrado!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "tomato",
        confirmButtonText: "Sí, eliminar!",
        cancelButtonText: "Cancelar"
      }).then(async (result) => {
        if (result.isConfirmed) {

          let id: number = Number(this.idExpense);
          await this.expensesService.deleteExpense(id);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Gasto borrado!",
            showConfirmButton: false,
            timer: 1500
          });

          this.location.back();

        }
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Error al borrar el gasto!",
        confirmButtonColor: "tomato"
      });
    }
  }

  goBack() {
    this.location.back();
  }

  ngChangeInfo() {
  }

}
