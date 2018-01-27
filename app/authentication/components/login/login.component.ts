import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../shared/models/login.model';
import { Router } from '@angular/router';

@Component({
    selector: 'Login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    loginModel: LoginModel = {
        mail: '',
        pw: ''
    }

    constructor(private router : Router) { }

    ngOnInit() { }

    onSignUpTap() {
        this.router.navigate(['/signup'])
    }

    onSignInTap() {
        console.log("Mail: " + this.loginModel.mail + "Pw: " + this.loginModel.pw)
    }
}