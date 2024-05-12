import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinManagementComponent } from './components/pin-management/pin-management.component';

const routes: Routes = [
  {
    path: 'create-pin',
    component: PinManagementComponent,
  },
  {
    path: '**',
    redirectTo: 'create-pin',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinRoutingModule {}
