import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        const url = 'https://sandbox.taxitime.com/api/v1/panelUsers/authenticate';
        const body = JSON.stringify({
            email: email,
            password: password
        });
        const headers = { headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })};

        return this.http.post(url, body, headers)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json().data;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return user;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}