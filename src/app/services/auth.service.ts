import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3000/api/auth";

  constructor(private http: HttpClient) { }

  // Register
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  //Save Token
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get Token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Check if user is Logged In
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

}
