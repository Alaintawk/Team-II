import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  submitting = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
) {
  this.loginForm = this.fb.group({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(8))
});

ngOnInIt(); void {
}

register(): void {
  this.submitting = true;
  const email = this.RegisterForm.value.email;
  const password = this.RegisterForm.value.password;

  if (email && password) {
    this.auth.SignUp(email, password).then(_ => /{
      this.submitting = false;
  }, err => {
    this.submitting = false;
  });
} else {
  this.submitting = false;
return;
}
}

gotoLoginPage(): void {
  this.router.navigate(['login']);
}
}
