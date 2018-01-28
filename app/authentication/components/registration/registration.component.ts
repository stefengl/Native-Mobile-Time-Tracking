import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationModel } from "../../shared/models/registration.model";
import { AuthenticationService } from "../../shared/provider/authentication.service";

@Component({
    selector: "Registration",
    moduleId: module.id,
    templateUrl: "registration.component.html"
})

export class RegistrationComponent implements OnInit {

    registrationModel: RegistrationModel = {
        mail: "",
        pw: "",
        pwConfirm: ""
    };

    constructor(
        private router: Router,
        private auth: AuthenticationService
    ) { }

    ngOnInit() { }

    onSignUpTap() {
        const isValid = this.isFormValid();

        if (isValid) {
            this.auth.register(this.registrationModel);
        }

    }

    onBackTap() {
        this.router.navigate(["/login"]);
    }

    isFormValid(): boolean {

        return true;
    }
}
