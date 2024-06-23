import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: string = "http://localhost:8080/user/";

  constructor(private httpClient: HttpClient) { }

  public iniciarSesion(username: string, password: string): Observable<User> {
    return this.httpClient.get<User>(`${this.api}login?username=${username}&password=${password}`)
  }

  public registrarse(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.api}registrar`, user);
  }
}
