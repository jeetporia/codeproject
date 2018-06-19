import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpServiceAngular2Page } from './http-service-angular2';

@NgModule({
  declarations: [
    HttpServiceAngular2Page,
  ],
  imports: [
    IonicPageModule.forChild(HttpServiceAngular2Page),
  ],
})
export class HttpServiceAngular2PageModule {}
