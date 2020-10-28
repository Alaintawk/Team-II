import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;

constructor(
    private route: ActivatedRoute,
    private router: Router,
) {
console.log("test")
}



}
