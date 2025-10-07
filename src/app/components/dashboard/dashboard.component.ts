import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  roles: any;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
// roles is already loaded before dashboard shows
    this.roles = this.route.snapshot.data['roles'];
    console.log("✅ Roles from Resolver:", this.roles);
  }

   logout() {
    this.authService.logout();
  }
}
