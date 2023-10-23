import {RouterModule, Routes} from "@angular/router";
import {LoginInComponent} from "./login-in/login-in.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: LoginInComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: SignInComponent,
        title: 'Register'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
};
