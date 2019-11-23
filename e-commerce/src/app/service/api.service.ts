import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from 'src/model/produto';
import { Fotos } from 'src/model/fotos';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/produto';
const apiUrlFotos = 'http://localhost:3000/fotos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProdutos (): Observable<Produto[]> {
    return this.http.get<Produto[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getProdutosByCategoria (categoria: String): Observable<Produto[]> {
    const url = `${apiUrl}/categoria/${categoria}`;
    return this.http.get<Produto[]>(url)
      .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getProduto(id: number): Observable<Produto> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Produto>(`getProduto id=${id}`))
    );
  }

  addProduto (produto): Observable<Produto> {
    return this.http.post<Produto>(apiUrl, produto, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((produto: Produto) => console.log(`adicionou o produto com w/ id=${produto}`)),
      catchError(this.handleError<Produto>('addProduto'))
    );
    
  }

  addFotos(fotos): Observable<Fotos> {
    console.log("Teste")
    console.log(fotos.idproduto)
    return this.http.post<Fotos>(apiUrlFotos, fotos, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((fotos: Fotos) => console.log(`adicionou fotos com w/ id=${fotos}`)),
      catchError(this.handleError<Fotos>('addFotos'))
    );
  }

  updateProduto(id, produto): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  deleteProduto (id): Observable<Produto> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Produto>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Produto>('deleteProduto'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}