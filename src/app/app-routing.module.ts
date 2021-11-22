import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/page/access/login/login.component';
import { MainPageComponent } from './module/page/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
  component: LoginComponent
},
  {
    path: 'login',
  component: LoginComponent
},
{
  path:"home",
  component: MainPageComponent
},
{
  path:"my-products",
  component:MainPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
