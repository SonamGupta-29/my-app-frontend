import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  // Constructor only for dependency injection
  constructor(private fb: FormBuilder) {}

  // ngOnInit for initialization logic
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      // number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
    });
  }

  // get passwordsMatch(): boolean {
  //   return this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  // }

  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     if (!this.passwordsMatch) {
  //       alert('Passwords do not match!');
  //       return;
  //     }
  //     console.log(this.registerForm.value);
  //     this.registerForm.reset(); // call the method properly
  //     alert('Form submitted successfully!');
  //   } else {
  //     this.registerForm.markAllAsTouched(); // show validation errors
  //   }
  // }

   onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset(); // Reset the form
      alert('Form submitted successfully!');
    } else {
      this.registerForm.markAllAsTouched(); // show validation errors
    }
  }
}
