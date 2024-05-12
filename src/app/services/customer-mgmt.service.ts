import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { CustomerItem } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerMgmtService {
  constructor(public customHttpService: CustomHttpService) {}

  public getCustomers() {
    return this.customHttpService.getReq('http://localhost:3000/customers');
  }

  public addCustomer(payload: CustomerItem) {
    return this.customHttpService.postReq(
      'http://localhost:3000/customers',
      payload
    );
  }
}
