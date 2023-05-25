import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  profileList=[{ "coord": {
    "lon": 12.2797,
    "lat": 46.7406
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.15,
    "feels_like": 276.93,
    "temp_min": 280.15,
    "temp_max": 280.58,
    "pressure": 1022,
    "humidity": 87
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.14,
    "deg": 100
  },
  "clouds": {
    "all": 100
  },
  "dt": 1684474972,
  "sys": {
    "type": 1,
    "id": 6809,
    "country": "IT",
    "sunrise": 1684467146,
    "sunset": 1684521749
  },
  "timezone": 7200,
  "id": 3168508,
  "name": "Mumbai",
  "cod": 200
},{ "coord": {
  "lon": 12.2797,
  "lat": 46.7406
},
"weather": [
  {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
  }
],
"base": "stations",
"main": {
  "temp": 280.15,
  "feels_like": 276.93,
  "temp_min": 280.15,
  "temp_max": 280.58,
  "pressure": 1022,
  "humidity": 87
},
"visibility": 10000,
"wind": {
  "speed": 5.14,
  "deg": 100
},
"clouds": {
  "all": 100
},
"dt": 1684474972,
"sys": {
  "type": 1,
  "id": 6809,
  "country": "IT",
  "sunrise": 1684467146,
  "sunset": 1684521749
},
"timezone": 7200,
"id": 3168508,
"name": "Pune",
"cod": 200
},{ "coord": {
  "lon": 12.2797,
  "lat": 46.7406
},
"weather": [
  {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
  }
],
"base": "stations",
"main": {
  "temp": 280.15,
  "feels_like": 276.93,
  "temp_min": 280.15,
  "temp_max": 280.58,
  "pressure": 1022,
  "humidity": 87
},
"visibility": 10000,
"wind": {
  "speed": 5.14,
  "deg": 100
},
"clouds": {
  "all": 100
},
"dt": 1684474972,
"sys": {
  "type": 1,
  "id": 6809,
  "country": "IT",
  "sunrise": 1684467146,
  "sunset": 1684521749
},
"timezone": 7200,
"id": 3168508,
"name": "India",
"cod": 200
}];
  ngOnInit(): void {
  }

}
