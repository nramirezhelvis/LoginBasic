import { Routes } from '@angular/router';
import { LoginComponent } from './registro/login/login.component';
import { CreateAccountComponent } from './registro/create-account/create-account.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes =
    [
        {
            path: '',
            component: LoginComponent
        },
        {
            path: 'home',
            title: 'home',
            component: HomeComponent
        },
        {
            path: 'login',
            title: 'Login',
            component: LoginComponent
        },
        {
            path: 'createAccount',
            title: 'createAccount',
            component: CreateAccountComponent
        }
    ];
