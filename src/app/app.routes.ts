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
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    { path: 'team', component: TeamComponent },
    { path: 'user', component: UserComponent },
    { path: 'expense', component: ExpenseComponent },
    { path: 'expense/new', component: NewExpenseComponent },
    { path: 'team/new', component: NewTeamComponent },
    { path: '*', redirectTo: '/home' } 
];
