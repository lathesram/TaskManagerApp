import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {MaterialModule} from "../material/material.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    MatButtonModule,
  ]
})
export class AuthModule {
}
