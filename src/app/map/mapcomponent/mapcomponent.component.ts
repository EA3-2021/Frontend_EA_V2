import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AdminService } from '../../services/admin.service';
import { Location } from '../../model/location';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'map',
  templateUrl: './mapcomponent.component.html',
  styleUrls: ['./mapcomponent.component.scss'],
})

export class MapcomponentComponent implements OnInit {

  locations: Location[];

  latitude1 : number;
  longitude1 : number;

  private map: L.Map;
  //private location: any;
  
  //Parte nueva
  propertyList = [];
  //

  data:any;

  constructor(public adminService: AdminService,private route: ActivatedRoute,private router: Router) {
    this.data = this.route.snapshot.paramMap.get('companyName'); }

  ngOnInit() {
    this.showMap()}

  private showMap() {
    
    this.adminService.getLocations().subscribe (locations => 
    {
      this.locations = locations;
      
      //console.log(this.locations [2].latitude);
      this.latitude1 = Number (this.locations [0].latitude);
      this.longitude1 = Number (this.locations [0].longitude);

      console.log(this.latitude1, this.longitude1);
      

      this.map = new L.Map('mapId').setView([this.latitude1, this.longitude1], 16);

      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: 'edupala.com'
      }).addTo(this.map);


      for (const property of this.locations) {
        
        let latitude = Number (property.latitude);
        let longitude = Number (property.longitude);

        L.marker([latitude, longitude]).addTo(this.map)
        .bindPopup(property.latitude)
        .openPopup();
      }
        
    });
  }

  goAdminDesk(){
      this.router.navigateByUrl('/admin-desk/' + this.data) 
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
