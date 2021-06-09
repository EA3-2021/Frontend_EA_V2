import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
//import icon from 'leaflet/dist/images/marker-icon.png';
//import iconShadow from 'leaflet/dist/images/marker-shadow.png';

@Component({
  selector: 'map',
  templateUrl: './mapcomponent.component.html',
  styleUrls: ['./mapcomponent.component.scss'],
})

export class MapcomponentComponent implements OnInit {

  private map: L.Map;
  //private location: any;
  
  //Parte nueva
  propertyList = [];
  //

  constructor() { }

  ngOnInit() {
    this.showMap()}

  private showMap() {
    
    /*this.location = {
      type: 'Point',
      coordinates: ['45.52222', '2.58696']
    };*/
    this.map = new L.Map('mapId').setView([42.35663, -71.1109], 16);

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    fetch('./assets/data.json')
      .then(res => res.json())
      .then(data => {
        this.propertyList = data.properties;
        this.leafletMap();
      })
      .catch(err => console.error(err));
  }

  leafletMap() {
    for (const property of this.propertyList) {
      L.marker([property.lat, property.long]).addTo(this.map)
        .bindPopup(property.city)
        .openPopup();
    }
  }
      
            /*this.map = L.map('mapId',{scrollWheelZoom: false
            }).setView([this.location.coordinates[1], this.location.coordinates[0]], 15);*/

        /*L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicHJldmVvIiwiYSI6ImNrYzllNmszeTEzc2cycHBobDNzNGV4N3gifQ.uRNLcGUqU8fjF4XZXt06Ew'
        }).addTo(this.map);*/
        /*L.marker([this.location.coordinates[1], this.location.coordinates[0]]).addTo(this.map);
      }*/

}
