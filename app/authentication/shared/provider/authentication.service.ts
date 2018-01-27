import { Injectable } from '@angular/core';
import { RegistrationModel } from '../models/registration.model';
import { LoginModel } from '../models/login.model';

@Injectable()
export class AuthenticationService {

    constructor() { }

    public register(newUser: RegistrationModel) {
        console.log("TODO: Register")
    }

    public login(user: LoginModel) {
        console.log("TODO: Login")
    }

    public logout(user: LoginModel) {
        console.log("TODO: Logout")
    }

    public isLoggedIn(user: LoginModel) {
        console.log("TODO: IsLoggedIn")
    }

}