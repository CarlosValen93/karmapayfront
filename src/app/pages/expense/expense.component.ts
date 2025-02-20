import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ExpensesService } from '../../services/expenses.service';
import { IExpense } from '../../interface/expense.interface';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-expense',
  imports: [RouterLink],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  @Input() idExpense: number=0;
  expensesService=inject(ExpensesService);
  router =inject(Router);
  expense!: IExpense
  location = inject(Location);

  async ngOnInit() {
    try {
      let id: number = Number(this.idExpense);
      let response = await this.expensesService.getById(id);
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
    } catch (error) {
      //  Swal.fire({
       //   icon: "error",
       //   title: "Oops...",
       //   text: "Error al obtener el gasto",
       // });
       // this.router.navigate(['/home']);
    }
  }

  async ngDeleteExpense() {
    try {
      let id: number = Number(this.idExpense);
      let response = await this.expensesService.deleteExpense(id);
      Swal.fire({
        icon: "success",
        title: "Borrado!",
        text: "El gasto ha sido borrado",
      });
      this.location.back();
    } catch (error) {
      Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "Error al borrar el gasto",
    });
    }
  }

  goBack() {
    this.location.back();
  }

  ngChangeInfo(){
  }

}
