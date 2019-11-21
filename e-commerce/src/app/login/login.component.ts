import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public email: string;
    public password: string;
    public error: string;

  constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    public submit() {
        this.auth.login(this.email, this.password)
          .pipe(first())
          .subscribe(
            result => this.router.navigate(['home']),
            err => this.error = 'Could not authenticate'
          );
          console.log(this.email);
          console.log(this.password);
      }

}
