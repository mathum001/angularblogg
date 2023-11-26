import { Component, OnDestroy } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy {
  emailForm: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private emailService: EmailService, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      // Check if the form is invalid
      this.validateForm();
      return;
    }

    const formData = this.emailForm.value;
    this.emailService.sendEmail(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          console.log('E-postmeddelandet har skickats', response);
          alert('Ditt meddelande har skickats!');
          this.emailForm.reset(); // Reset the form on successful submission
        },
        error: err => {
          console.error('Fel vid skickande av e-postmeddelandet', err);
          if (err.status === 500) {
            alert('Ett internt fel uppstod. Försök igen senare.');
          } else {
            alert('Ett oväntat fel uppstod vid skickande av meddelandet.');
          }
        }
      });
  }

  validateForm() {
    Object.values(this.emailForm.controls).forEach(control => {
      control.markAsTouched(); // Mark all fields as touched to trigger validation messages
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
