import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { AlertComponent } from '../_directives/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
    	LoginComponent,
    	AlertComponent
    ],
    exports: [LoginComponent]
})

export class LoginModule { }
