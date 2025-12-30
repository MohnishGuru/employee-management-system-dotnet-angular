import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RegistationServiceService } from '../registation-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 email: string = '';
  password: string = '';

   constructor(private ser: RegistationServiceService,
            private router: Router
   ) {}
login(email: string, password: string) {

  const data = {
    email: email,
    password: password
  };

  this.ser.login(data).subscribe({
    next: (res) => {

        this.router.navigate(['/employeList']);

    },
    error: () => {
      alert('Login Error');
    }
  });

}

}
