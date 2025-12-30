import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistationServiceService } from '../registation-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './registation.component.html',
  styleUrl: './registation.component.css'
})
export class RegistationComponent {

  constructor(private service: RegistationServiceService) {}

registationForm = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),
  mobile: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required)
});

  addRegistation() {
    const data = this.registationForm.value;

    this.service.addRegistation(data).subscribe({
      next: (res) => {
        alert('Registration Successful');
        this.registationForm.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Error while saving data');
      }
    });
  }
}
