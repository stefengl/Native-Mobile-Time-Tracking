// MODULES
import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AuthenticationRoutingModule } from './authentication.routing.module';

// Declarations
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

// Provider
import { AuthenticationService } from './shared/provider/authentication.service';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthenticationRoutingModule,
        NativeScriptFormsModule
    ],
    exports: [
        LoginComponent,
        RegistrationComponent
    ],
    declarations: [
        LoginComponent,
        RegistrationComponent
    ],
    providers: [AuthenticationService],
})
export class AuthenticationModule { }
