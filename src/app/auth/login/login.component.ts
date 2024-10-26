import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onLogin(form: any) {
    const credentials = form.value;
    this.authService.login(credentials).subscribe({
      next: (res) => console.log('Inicio de sesión exitoso', res),
      error: (err) => console.error('Error en inicio de sesión', err),
    });
  }
}
