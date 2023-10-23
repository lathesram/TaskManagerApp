import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {LoginInComponent} from './login-in/login-in.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {MaterialModule} from "../material/material.module";


@NgModule({
    declarations: [
        SignInComponent,
        LoginInComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule
    ]
})
export class AuthModule {
}
