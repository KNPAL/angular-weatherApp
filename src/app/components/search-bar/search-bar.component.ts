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
    if (!!this.searchText) {
      this.httpCommonService
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchText}&appid=225012b5e782cc243a2be3224cec5ba4`)
      .subscribe(x=>{
        console.log(x)
        this.commonDataService.currentSearchObjSubject.next(x);
      })
     
    }
  }
}
