import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';

const routes: Routes = [
  {
    path: 'resigter-customer',
    component: CustomerRegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
