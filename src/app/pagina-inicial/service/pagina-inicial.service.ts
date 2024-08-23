import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class PaginaInicialService {
  constructor(
    private http: HttpClient
  ) { }

  obterCotacoes(search?: string, sortBy?: string, sortOrder?: string, limit?: string, sector?: string, type?: string): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}quote/list?type=${type}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&limit=${limit}&sector=${sector}&token=eJGEyu8vVHctULdVdHYzQd`,
    )
  }

  obterAcoes(): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}quote/list?type=stock&token=e95Ec2C6jG11D7t4AqwBhQ`,
    )
  }

}
