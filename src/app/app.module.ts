import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CutomerDetailsComponent } from './components/customer/cutomer-details/cutomer-details.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './components/customer/customer-orders/customer-orders.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersCardComponent } from './components/customers/customers-card/customers-card.component';
import { CustomersGridComponent } from './components/customers/customers-grid/customers-grid.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CustomerComponent,
    CutomerDetailsComponent,
    CustomerDetailsComponent,
    CustomerOrdersComponent,
    CustomerEditComponent,
    CustomersComponent,
    CustomersCardComponent,
    CustomersGridComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
