import { NgModule } from "@angular/core";
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '/login', component: LoginComponent }
]

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild({})
    ]

})
export class AppRoutingModule{}