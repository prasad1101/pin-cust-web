import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinRoutingModule } from './pin-routing.module';
import { PinManagementComponent } from './components/pin-management/pin-management.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PinManagementComponent],
  imports: [
    CommonModule,
    PinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule,
    FileUploadModule,
  ],
})
export class PinModule {}
