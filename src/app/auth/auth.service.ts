import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

    constructor(private router: Router) {

    }

    loginServ(formvalue) {
        if (formvalue.email === 'vishalsaini@gmail.com' && formvalue.password === '123456') {
            localStorage.setItem('email', formvalue.email);
            this.router.navigate(['/products']);
        }
    }

}
