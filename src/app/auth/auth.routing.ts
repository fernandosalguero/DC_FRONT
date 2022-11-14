import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Componente
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const rutasHijasAuth: Routes = [

{
    path: 'auth',
    children: [
        { path: 'login', component: LoginComponent},
        { path: 'register', component: RegisterComponent},
    ]
}

];

@NgModule({
    imports: [ RouterModule.forChild(rutasHijasAuth)],
    exports: [RouterModule],
})

export class AuthRoutingModule {}