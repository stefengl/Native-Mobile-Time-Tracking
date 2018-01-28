// MODULES
import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AuthenticationRoutingModule } from "./authentication.routing.module";
import { TabsModule } from "../tabs/tabs.module";

// Declarations
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";

// Provider
import { AuthenticationService } from "./shared/provider/authentication.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AuthenticationRoutingModule,
        TabsModule
    ],
    exports: [
        LoginComponent,
        RegistrationComponent
    ],
    declarations: [
        LoginComponent,
        RegistrationComponent
    ],
    providers: [AuthenticationService]
})
export class AuthenticationModule { }
