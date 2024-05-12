import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinManagementComponent } from './components/pin-management/pin-management.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [PinManagementComponent, CustomerRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule,
    FileUploadModule,
  ],
  exports: [PinManagementComponent, CustomerRegistrationComponent],
})
export class SharedModule {}
