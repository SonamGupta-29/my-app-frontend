import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
   if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return; //stop execution if invalid
   }

//proceed with login
const {email, password} = this.loginForm.value;
this.authService.login({email, password}).subscribe({
  next: (res: any) => {
    this.authService.saveToken(res.token);
    this.router.navigate(['/dashboard'])
  },
  error: (err) => {
    console.error('Login failed', err.error.message);
    alert(err.error.message);
  }
});

}


}
