import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cliente } from 'src/model/cliente';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3000/cliente';

@Injectable({
    providedIn: 'root'
  })

  export class ApiService 
  {
    constructor(private http: HttpClient) { }

    getClientes (): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(apiUrl)
        .pipe(
          tap(clientes => console.log('leu os produtos')),
          catchError(this.handleError('getClientes', []))
        );
    }
  
    getCliente(id: number): Observable<Cliente> {
      const url = `${apiUrl}/${id}`;
      return this.http.get<Cliente>(url).pipe(
        tap(_ => console.log(`leu o cliente id=${id}`)),
        catchError(this.handleError<Cliente>(`getCliente id=${id}`))
      );
    }
  
    addCliente (cliente): Observable<Cliente> {
      console.log(cliente);
      return this.http.post<Cliente>(apiUrl, cliente, httpOptions).pipe(
        // tslint:disable-next-line:no-shadowed-variable
        tap((cliente: Cliente) => console.log(`adicionou o cliente com w/ id=${cliente}`)),
        catchError(this.handleError<Cliente>('addCliente'))
      );
    }
  
    updateCliente(id, cliente): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.put(url, cliente, httpOptions).pipe(
        tap(_ => console.log(`atualiza o cliente com id=${id}`)),
        catchError(this.handleError<any>('updateCliente'))
      );
    }
  
    deleteCliente (id): Observable<Cliente> {
      const url = `${apiUrl}/delete/${id}`;
  
      return this.http.delete<Cliente>(url, httpOptions).pipe(
        tap(_ => console.log(`remove o cliente com id=${id}`)),
        catchError(this.handleError<Cliente>('deleteCliente'))
      );
    }
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
        return of(result as T);
      };
    }
  }
