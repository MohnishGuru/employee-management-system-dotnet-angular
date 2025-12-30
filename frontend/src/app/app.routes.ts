import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import { EmoloyeListComponent } from './emoloye-list/emoloye-list.component';

export const routes: Routes = [
  { path: 'register', component: RegistationComponent },
  { path: 'login', component: LoginComponent },
  {path: 'employeList', component: EmoloyeListComponent}
];
