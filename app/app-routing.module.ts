import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthenticationRoutingModule } from "./authentication/authentication.routing.module";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
