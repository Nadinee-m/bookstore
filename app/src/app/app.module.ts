import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleserviceComponent } from './pages/singleservice/singleservice.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactformComponent } from './shared/contactform/contactform.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInterceptor } from './providers/user.interceptor';
import { RegisterComponent } from './pages/register/register.component';
import { AddAddrComponent } from './pages/add-addr/add-addr.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleserviceComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    ContactformComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AddAddrComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
