import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../Service/common-data.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  constructor(private commonDataService: CommonDataService) {}

  profileList: any[] = [];
  ngOnInit(): void {
    this.profileList = this.commonDataService.getProfileList();
  }
}
