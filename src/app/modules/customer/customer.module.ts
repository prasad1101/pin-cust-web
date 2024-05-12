import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [CustomerRegistrationComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule,
  ],
})
export class CustomerModule {}
