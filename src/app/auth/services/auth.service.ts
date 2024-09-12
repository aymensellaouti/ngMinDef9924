import { inject, Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { Observable } from "rxjs";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "src/app/config/api.config";


@Injectable({providedIn: 'root'})
export class AuthService {

  http =  inject(HttpClient);
  login(credentials: CredentialsDto): Observable<LoginResponseDto>{
    return this.http.post<LoginResponseDto>(APP_API.login, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
