import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleserviceComponent } from './pages/singleservice/singleservice.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"singleservice",component:SingleserviceComponent},
{path:"login", component:LoginComponent},
{path:'me', component:ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
