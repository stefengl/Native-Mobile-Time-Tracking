import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginModel } from "../../shared/models/login.model";
import { AuthenticationService } from "../../shared/provider/authentication.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "login.component.html"
})

export class LoginComponent {

    loginModel: LoginModel = {
        mail: "stef.engl.se@gmail.com",
        pw: "Affe1234"
    };

    constructor(
        private router: Router,
        private auth: AuthenticationService) { }


    onSignUpTap() {
        this.router.navigate(["/signup"]);
    }

    onSignInTap() {
        this.auth.login(this.loginModel)
            .subscribe((user) => {
                if (user) {
                    this.toTabs()
                }
            })
    }

    toTabs(){
        this.router.navigate(["/tabs"])
    }
}
