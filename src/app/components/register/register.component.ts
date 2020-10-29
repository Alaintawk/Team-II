import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,) {

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



gotoDashboard(): void {
  this.router.navigate(['dashboard']);

}

}
