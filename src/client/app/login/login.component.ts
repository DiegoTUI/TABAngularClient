import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/index';

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
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authenticationService: AuthenticationService) {}

	ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard/home';
    }

	login(email, password) {
		console.log('login')
		this.authenticationService.login(email, password)
            .subscribe(
                data => {
                	console.log(this.returnUrl)
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.error('An error occurred', error);
                });
	}
}
