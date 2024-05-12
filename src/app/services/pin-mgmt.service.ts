import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { PinItem } from '../models/pin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinMgmtService {
  constructor(public customHttpService: CustomHttpService) {}

  public getPins() {
    return this.customHttpService.getReq('http://localhost:3000/pins');
  }

  public addPin(payload: PinItem) {
    return this.customHttpService.postReq(
      'http://localhost:3000/pins',
      payload
    );
  }
}
