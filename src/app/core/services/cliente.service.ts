import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiURL = environment.apiURL + '/api/clientes/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public find(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL);
  }

  public findById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + id);
  }

  public create(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.apiURL, cliente);
  }

}
