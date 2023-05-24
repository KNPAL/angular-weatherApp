import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/Service/common-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private commonDataService: CommonDataService) { }
  wData:any;
  ngOnInit(): void {
    this.commonDataService.currentSearchObjSubject.subscribe((x:any)=>{
      if(!!x){
        this.wData = x;
      }
    })
  }

}
