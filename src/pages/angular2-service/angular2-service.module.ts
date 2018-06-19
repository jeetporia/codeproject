import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Angular2ServicePage } from './angular2-service';

@NgModule({
  declarations: [
    Angular2ServicePage,
  ],
  imports: [
    IonicPageModule.forChild(Angular2ServicePage),
  ],
})
export class Angular2ServicePageModule {}
