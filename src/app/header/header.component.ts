import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    email: string;

    constructor(private router: Router) {
        this.email = localStorage.getItem('email');
        console.log(this.email);
    }

    ngOnInit() {


    }

    onLogout(){
        localStorage.clear();
        this.router.navigate(['/auth']);
    }

    onLogin(){
        this.router.navigate(['/auth']);
    }
}
