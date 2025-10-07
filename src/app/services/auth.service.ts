import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3000/api/auth";

  constructor(private http: HttpClient, private router: Router) { }

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

 // Fetch user profile (protected)
   // ✅ Fetch roles (protected API)
  getRoles(): Observable<string[]> {
    const token = localStorage.getItem('token'); // assuming you store JWT in localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<string[]>(`${this.apiUrl}/profile`, { headers });
  }

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // Check if user is Logged In
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
    // this.router.navigate(['/login']); 
  }
}
