import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
