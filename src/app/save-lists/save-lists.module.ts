import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveListsRoutingModule } from './save-lists-routing.module';
import { SaveListsComponent } from './save-lists.component';


@NgModule({
  declarations: [
    SaveListsComponent
  ],
  imports: [
    CommonModule,
    SaveListsRoutingModule
  ]
})
export class SaveListsModule { }
