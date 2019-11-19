import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})


export class AuthenticationService {

    login(email: string, password: string) {
        if (email == "" && password == "") {
            localStorage.setItem('currentUser', "loggedin");
            return true;
        }
    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    public get loggedIn(): boolean {
        return (localStorage.getItem('currentUser') !== null);
    }
}