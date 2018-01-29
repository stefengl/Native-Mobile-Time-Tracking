import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { RegistrationModel } from "../models/registration.model";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map"
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";



@Injectable()
export class AuthenticationService {
    private endpoint: string = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw"
    user: any = {};
    userSubject: Subject<any> = new Subject();
    userObservable: Observable<any> = this.userSubject.asObservable();

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
        })
    }

    logout(user: LoginModel) {
        console.log("TODO: Logout");
    }

    isLoggedIn(user: LoginModel) {
        console.log("TODO: IsLoggedIn");
    }

    onUserChanged(user) {
        this.userSubject.next(user)
    }
}
