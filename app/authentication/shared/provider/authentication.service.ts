import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { RegistrationModel } from "../models/registration.model";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map"



@Injectable()
export class AuthenticationService {
    private endpoint: string = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw"
    private user: any = null;

    constructor(
        private http: HttpClient) { }

    register(newUser: RegistrationModel) {
        console.log("TODO: Register");
    }

    login(user: LoginModel) {
        return this.http.post(this.endpoint, {
            email: user.mail,
            password: user.pw,
            returnSecureToken: true
        }).map(this.handleLogin)
    }

    logout(user: LoginModel) {
        console.log("TODO: Logout");
    }

    isLoggedIn(user: LoginModel) {
        console.log("TODO: IsLoggedIn");
    }


    handleLogin(response: Response) {
        this.user = Object.assign({}, response)
        return this.user;
    }

}
