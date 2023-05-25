import { Component, OnInit, Input } from '@angular/core';
import { CommonDataService } from 'src/app/Service/common-data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  @Input() weatherData!: any;
  constructor(private commonDataService: CommonDataService) {
    
  }


  ngOnInit(): void {
    console.log(!!this.weatherData.length)
  }

  onSaveClick():void{
    console.log(this.weatherData)
    alert('save')
  }

}
