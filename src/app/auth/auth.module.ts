import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {MaterialModule} from "../material/material.module";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    MatButtonModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
