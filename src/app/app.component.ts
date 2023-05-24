import { Component,OnInit } from '@angular/core';
import { CommonDataService } from './Service/common-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-wetherApp';
  wData:any;
  constructor(private commonDataService: CommonDataService) { }

  ngOnInit(): void {
    this.commonDataService.currentSearchObjSubject.subscribe((x:any)=>{
      this.wData = x;
      console.log('longitude:'+x.coord.lon+'    ' +'latude:'+x.coord.lat)
      console.log('main:'+x.main, x.main.feels_like,x.main.humidity,x.main.pressure,x.main.temp,x.main.temp_max,x.main.temp_main)
      console.log(x.sys.country,x.sys.sunrise,x.sys.sunset)
    })
  }

}
