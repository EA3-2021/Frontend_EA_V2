import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {LocationService} from "../services/location.service";
import {Location} from "../model/location";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @Input() protected location: Location;
  @Output() event: EventEmitter<Location> = new EventEmitter();
  

  constructor(protected  locationService: LocationService) {
    this.ngOnInit();
  }

  ngOnInit() {
  }

  //private obtainLocation() {
   // return this.locationService
    //    .getGeolocation();
  //}

  
}
