import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { TeamComponent } from './pages/team/team.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { NewExpenseComponent } from './pages/new-expense/new-expense.component';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';
import { UpdateExpenseComponent } from './pages/expense/update-expense/update-expense.component';
import { UpdateProfileComponent } from './pages/user/update-profile/update-profile.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'home/register', component: RegisterComponent },
    { path: 'home/login', component: LoginComponent },
    { path: 'team/:idTeam', component: TeamComponent, canActivate: [authGuard] },
    { path: 'user/:idUser', component: UserComponent, canActivate: [authGuard] },
    { path: 'expense/:idExpense', component: ExpenseComponent, canActivate: [authGuard] },
    { path: 'newexpense/:idTeam', component: NewExpenseComponent, canActivate: [authGuard] },
    { path: 'newteam', component: NewTeamComponent, canActivate: [authGuard] },
    { path: 'updateexpenses/:idExpense', component: UpdateExpenseComponent, canActivate: [authGuard] },
    { path: 'updateprofile/:idUser', component: UpdateProfileComponent, canActivate: [authGuard] },
    { path: '**', component: NotfoundComponent }
];
