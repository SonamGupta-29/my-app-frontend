import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' }) //Makes the resolver globally available.

export class RolesResolver implements Resolve<any> {
  constructor(private authService: AuthService) {}

  resolve(): Observable<any> {
    console.log("🔄 Pre-loading roles before navigating...");
    
    // Add a delay (for testing only, not in production)
    return this.authService.getRoles().pipe(
      delay(2000)  // simulate 2 sec delay
    );
  }
}
