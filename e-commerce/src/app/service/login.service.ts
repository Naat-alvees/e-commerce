import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/internal/operators/retry';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public cliente: Cliente = new Cliente()
  public isLogged: boolean = false

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  public login(email: string, senha: string): Observable<Cliente> {
    const body = new HttpParams().set('email', email).set('senha', senha);
    console.log(body.toString())
    return this.http.post<Cliente>("http://localhost:3000/login",
      body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(retry(1), map((answer: any) => {
      return answer.data[0]
    }))
  }

  public logout(): void {
    this.isLogged = false
    this.cliente = new Cliente()
    localStorage.clear()
  }

}
