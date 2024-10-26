import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  onRegister(form: any) {
    const user = form.value;
    this.authService.register(user).subscribe({
      next: (res) => console.log('Registro exitoso', res),
      error: (err) => console.error('Error en registro', err),
    });
  }
}
