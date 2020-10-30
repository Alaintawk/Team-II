import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
    ) {}


    create_Customer(record) {
      return this.firestore.collection('Customer').add(record);
    }

    read_Customers(): Observable<any> {
      return this.firestore.doc('Customers').snapshotChanges();
    }

    update_Customers(record_id, record) {
      this.firestore.doc('Customers/' + record_id).update(record);
    }

    deleteCustomer(record_id) {
      this.firestore.doc('Customers' + record_id).delete();
    }
  }
