import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandlingService } from '../services/error-handling.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private errorHandlingService: ErrorHandlingService
  ) {}

  onLogin(event: Event): void {
    event.preventDefault();

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        // Simulate successful login and navigate to the dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.errorHandlingService.handleError(error).subscribe({
          next: (message: string) => this.errorMessage = message
        });
      }
    });
  }
}
