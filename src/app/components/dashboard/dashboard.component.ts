import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  customers: any;
  customerName: string;
  customerAge: number;
  CustomerAddress: string;


  constructor(
    private crudService: CrudService)
    { }


  ngOnInit(): void {
    this.crudService.read_Customers().subscribe(data => {
      this.customers = data.map((e: any) => {
        return{
          id: e.paypayload.doc.id,
          isEdit: false,
          Name: e.paypayload.doc.id.data().Name,
          Age: e.paypayload.doc.id.data().Age,
          Address: e.paypayload.doc.id().Address,
  };
});
console.log(this.customers);
    });

}

CreateRecord(): void {
  const record = {Name: '', Age: 0, Address: ''};
  record.Name = this.customerName;
  record.Age = this.customerAge;
  record.Address = this.CustomerAddress;
  this.crudService.create_NewCustomer(record).then(resp => {
    this.customerName = '';
    this.customerAge = undefined;
    this.CustomerAddress = '';
console.log(reso);
  })
  .catch(err => {
    console.log(error);
});
}

RemoveRecord(rowID): void {
  this.crudService.delete_Customer(rowID);
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
