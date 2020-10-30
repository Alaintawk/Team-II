import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerName: any;
  customerAge: any;
  CustomerAddress: any;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
  }


CreateRecord(): void {
  const record = {Name: '', Age: 0, Address: ''};
  record.Name = this.customerName;
  record.Age = this.customerAge;
  record.Address = this.CustomerAddress;
  this.crudService.create_Customer(record).then(resp => {
    this.customerName = '';
    this.customerAge = undefined;
    this.CustomerAddress = '';
    console.log(resp);
  })
  .catch(err => {
    console.log(err);
});
}

RemoveRecord(rowID): void {
  this.crudService.deleteCustomer(rowID);
}

EditRecord(record): void {
  record.isEdit = true;
  record.EditName = record.Name;
  record.EditAge = record.Age;
  record.EditAddress = record.Address;
}

UpdateRecord(recordRow): void {
  const record = {Name: '', Age: 0, Address: ''};
  record.Name = recordRow.EditName;
  record.Age = recordRow.EditAge;
  record.Address = recordRow.EditAddress;
  this.crudService.update_Customers(recordRow.id, record);
  recordRow.isEdit = false;
}

}

