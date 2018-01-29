import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/shared/provider/authentication.service';

@Injectable()
export class DataService {

    user: any = {}

    firebaseDbEndpoint: string = "https://time-tracking-pwa.firebaseio.com"

    constructor(
        private auth: AuthenticationService,
        private httpClient: HttpClient
    ) {
        this.auth.userObservable.subscribe((user) => {
            console.log(JSON.stringify(user))
            this.user = user;
        })
    }

    getCategories() {
        return this.httpClient.get(this.firebaseDbEndpoint + "/categories.json?auth=" + this.user.idToken)
    }

    getTags() {
        return this.httpClient.get(this.firebaseDbEndpoint + "/tags.json?auth="+ this.user.idToken)
    }
}