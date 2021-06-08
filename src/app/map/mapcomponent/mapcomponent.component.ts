import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './mapcomponent.component.html',
  styleUrls: ['./mapcomponent.component.scss'],
})
export class MapcomponentComponent implements OnInit {

  private map: L.Map;
  private location: any;
  constructor() { }

  ngOnInit() {
    console.log("this.ngOnInit");
    this.showMap()}

  private showMap() {
    
    this.location = {
      type: 'Point',
      coordinates: ['45.52222', '2.58696']
    };
    
    console.log("*****postition", this.location);
      
            this.map = L.map('mapId',{scrollWheelZoom: false
            }).setView([this.location.coordinates[1], this.location.coordinates[0]], 15);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicHJldmVvIiwiYSI6ImNrYzllNmszeTEzc2cycHBobDNzNGV4N3gifQ.uRNLcGUqU8fjF4XZXt06Ew'
        }).addTo(this.map);
        L.marker([this.location.coordinates[1], this.location.coordinates[0]]).addTo(this.map);
      }

}
