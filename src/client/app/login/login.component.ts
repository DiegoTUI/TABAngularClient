import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
	styleUrls: ['login.css']
})

export class LoginComponent {
	constructor(private router: Router,
				private http: Http) {
    }

	login(email, password) {
		const url = 'http://127.0.0.1:9000/v1/panelUsers/authenticate';
		const body = JSON.stringify({
            email: email,
            password: password
        });
        const headers = { headers: new Headers({
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	    })};

	    console.log('about to send request', url, body, headers);

		return this.http.post(url, body, headers)
            .toPromise()
            .then((response) => {
            	if (response.json().data.token) {
            		this.router.navigate(['dashboard', 'home']);
            	}
            })
            .catch(error => {
            	console.error('An error occurred', error);
            });
	}
}
