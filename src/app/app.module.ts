import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { TodolistModule } from './todolist/todolist.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './signin/signin.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        TodolistModule,
        LoginModule,
        SignInModule,
        routing,
        FormsModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([{path: 'Login', component: LoginModule}, {path: 'Signin', component: SignInModule}])

    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
