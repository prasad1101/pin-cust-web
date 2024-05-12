import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { Observable } from 'rxjs';
import { CountryData } from '../models/sharedData.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor(public customHttpService: CustomHttpService) {}

  public getCountry(): Observable<CountryData> {
    return this.customHttpService.getReq(
      'https://api.first.org/data/v1/countries'
    ) as Observable<CountryData>;
  }
}
