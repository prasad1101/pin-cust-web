import { Component, OnInit } from '@angular/core';
import { PinMgmtService } from '../../services/pin-mgmt.service';
import { PinItem } from '../../models/pin.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public pinList!: PinItem[];
  constructor(public pinService: PinMgmtService) {}

  ngOnInit(): void {
    this.getAllPins();
  }

  public getAllPins() {
    this.pinService.getPins().subscribe((x: any) => {
      console.log('all pins', x);
      this.pinList = x;
    });
  }
}
