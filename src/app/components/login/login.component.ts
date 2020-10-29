import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
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
  }

    ngOnInIt(){

    }


    // tslint:disable-next-line: no-unused-expression
    login():void {
      this.submitting = true,
        const email = this.Logincomponent.value.email;
      const password = this.loginForm.value.password;

      if (email && password) {
        this.auth.SignIn(email, password).then(_ => {
          this.submitting = false;
        }, err => {
          this.submitting = false;
        });
      } else {
        this.submitting = false;
        return;
      }
    }

    gotoRegisterPage(): void {
      this.router.navigate(['register']);
    }
  }
