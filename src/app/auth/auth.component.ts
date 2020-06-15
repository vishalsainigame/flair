import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {

    constructor(private authService: AuthService){}

    isLoginMode = true;

    onSwithMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        this.authService.loginServ(form.value);
        // console.log(form.value);
        form.reset();
    }
}
