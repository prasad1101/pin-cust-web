import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedDataService } from '../../../../services/shared-data.service';
import { CountryData } from '../../../../models/sharedData.model';
import { CustomerMgmtService } from '../../../../services/customer-mgmt.service';
import { CustomerItem } from '../../../../models/customer.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent implements OnInit {
  /**
   * registration form controller
   */
  public registrationForm = new FormGroup({
    title: new FormControl(''),
    email: new FormControl(''),
    region: new FormControl(''),
    country: new FormControl(''),
  });

  public regionData!: string[];
  public groupedData: { [region: string]: string[] } = {};
  public selectedRegion!: string;
  public selectedCountry!: string;

  public constructor(
    private fb: FormBuilder,
    public sharedDataService: SharedDataService,
    public customerService: CustomerMgmtService
  ) {}

  public ngOnInit(): void {
    this.registrationForm = this.fb.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      country: ['', Validators.required],
    });
    this.getCountryMasterData();
  }

  /**
   * on submit event handler
   */
  public onSubmit(): void {
    console.log(
      "registrationForm.get('title').invalid",
      this.registrationForm.get('title')?.invalid,
      this.registrationForm.get('title')?.touched
    );
    if (this.registrationForm.valid) {
      // processing registration logic here
      this.addCustomer(this.registrationForm.value as any);
      console.log(this.registrationForm.value);
    } else {
      // Mark form fields as touched to display validation errors

      this.markFormGroupTouched(this.registrationForm);
    }
  }

  /**
   *    Helper function to mark all form fields as touched markFormGroup Touched
   * @param formGroup
   */
  public markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /**
   * for getting country master data
   */
  public getCountryMasterData() {
    this.sharedDataService.getCountry().subscribe((d: CountryData) => {
      if (d.data) {
        Object.keys(d.data).forEach((countryCode) => {
          const { country, region } = d.data[countryCode];
          if (!this.groupedData[region]) {
            this.groupedData[region] = [];
          }
          this.groupedData[region].push(country);
        });
      }
      this.regionData = Object.keys(this.groupedData);
    });
  }

  /**
   * for finding country by region
   * @param region
   * @returns
   */
  public getCountryByRegion(region: string) {
    return this.groupedData[region];
  }

  /**
   * for adding new customer
   * @param payload
   */
  public addCustomer(payload: CustomerItem) {
    this.customerService.addCustomer(payload).subscribe((x) => {
      Swal.fire({
        icon: 'success',
        title: 'Customer added successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
}
