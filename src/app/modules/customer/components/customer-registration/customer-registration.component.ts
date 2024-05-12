import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedDataService } from '../../../../services/shared-data.service';
import { CountryData } from '../../../../models/sharedData.model';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent implements OnInit {
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
    public sharedDataService: SharedDataService
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

  public onSubmit(): void {
    console.log(
      "registrationForm.get('title').invalid",
      this.registrationForm.get('title')?.invalid,
      this.registrationForm.get('title')?.touched
    );
    if (this.registrationForm.valid) {
      // Process registration logic here

      console.log(this.registrationForm.value);
    } else {
      // Mark form fields as touched to display validation errors

      this.markFormGroupTouched(this.registrationForm);
    }
  }

  // Helper function to mark all form fields as touched markFormGroup Touched (formGroup: FormGroup) {
  public markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

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
      console.log('region data', this.regionData);
      console.log('groupedData country data', this.groupedData);
    });
  }
  public getCountryByRegion(region: string) {
    return this.groupedData[region];
  }
}
