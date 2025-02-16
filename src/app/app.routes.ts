import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { TeamComponent } from './pages/team/team.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { NewExpenseComponent } from './pages/new-expense/new-expense.component';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent},
    { path: 'home/register', component: RegisterComponent},
    { path: 'home/login', component: LoginComponent },
    { path: 'team/:idTeam', component: TeamComponent },
    { path: 'user/:idUser', component: UserComponent },
    { path: 'expense/:idExpense', component: ExpenseComponent },
    { path: 'newexpense', component: NewExpenseComponent },
    { path: 'newteam', component: NewTeamComponent },
    { path: '*', redirectTo: '/home' } 
];
