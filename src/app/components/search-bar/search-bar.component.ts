import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/Service/common-data.service';
import { HttpCommonService } from 'src/app/Service/http-common.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private commonDataService: CommonDataService, private httpCommonService:HttpCommonService) { }
  searchText: String = '';

  ngOnInit(): void {
  }

  onSearchClick(): void {
    const appWeather = {
      "coord": {
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
      "name": "Innichen",
      "cod": 200
    };
    if (!!this.searchText) {
      this.httpCommonService
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchText}`)
      .subscribe(x=>{
        console.log(x)
      })
      this.commonDataService.currentSearchObjSubject.next(appWeather);
    }
  }
}
