import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageMainComponent } from './pages/page-main/page-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: PageLoginComponent },
  { path: 'main', component: PageMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
